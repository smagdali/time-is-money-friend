(function () {
  "use strict";

  var lastUrl = "";

  // --- Site matching helpers ---

  function matchSite(host, path) {
    var siteIds = Object.keys(SITES);
    for (var i = 0; i < siteIds.length; i++) {
      var id = siteIds[i];
      var site = SITES[id];
      if (!site.hostPattern.test(host)) continue;
      if (site.pathPattern) {
        if (site.pathPattern.test(path)) return id;
      } else if (site.searchPaths) {
        for (var j = 0; j < site.searchPaths.length; j++) {
          var sp = site.searchPaths[j];
          if (path === sp || path.startsWith(sp + "/") || path.startsWith(sp + "?")) {
            return id;
          }
        }
      }
    }
    return null;
  }

  function hostIsSpa(host) {
    var siteIds = Object.keys(SITES);
    for (var i = 0; i < siteIds.length; i++) {
      var site = SITES[siteIds[i]];
      if (site.spa && site.hostPattern.test(host)) return true;
    }
    return false;
  }

  // --- Core redirect logic ---

  function checkAndRedirect() {
    var href = window.location.href;
    if (href === lastUrl) return;
    lastUrl = href;

    var host = window.location.hostname;
    var path = window.location.pathname;
    var siteId = matchSite(host, path);
    if (!siteId) return;

    var rule = SITES[siteId];
    var url = new URL(href);
    var params = url.searchParams;

    var sortKey = siteId + "_sort";
    var enabledKey = siteId + "_enabled";

    var defaults = {};
    defaults[enabledKey] = true;
    defaults[sortKey] = rule.defaultSort;

    var snapshotHref = href;
    chrome.storage.local.get(defaults, function (prefs) {
      // Bail out if the URL changed while we were waiting for storage
      if (window.location.href !== snapshotHref) return;

      if (!prefs[enabledKey]) return;

      var currentSort = params.get(rule.sortParam);
      if (currentSort === prefs[sortKey]) return;

      params.set(rule.sortParam, prefs[sortKey]);

      if (rule.additionalParams) {
        var extra = Object.keys(rule.additionalParams);
        for (var k = 0; k < extra.length; k++) {
          if (!params.has(extra[k])) {
            params.set(extra[k], rule.additionalParams[extra[k]]);
          }
        }
      }

      window.location.replace(url.toString());
    });
  }

  // --- Init ---

  checkAndRedirect();

  if (hostIsSpa(window.location.hostname)) {
    window.addEventListener("__timf_urlchange", checkAndRedirect);
    window.addEventListener("popstate", checkAndRedirect);
  }
})();
