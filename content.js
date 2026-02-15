(function () {
  "use strict";

  var host = window.location.hostname;
  var path = window.location.pathname;

  // Find matching site rule
  var siteId = null;
  var siteIds = Object.keys(SITES);
  for (var i = 0; i < siteIds.length; i++) {
    var id = siteIds[i];
    var site = SITES[id];
    if (!site.hostPattern.test(host)) continue;
    // pathPattern: regex match anywhere in path (e.g. IKEA's /us/en/search/)
    // searchPaths: prefix match (default for most sites)
    if (site.pathPattern) {
      if (site.pathPattern.test(path)) { siteId = id; break; }
    } else if (site.searchPaths) {
      for (var j = 0; j < site.searchPaths.length; j++) {
        var sp = site.searchPaths[j];
        if (path === sp || path.startsWith(sp + "/") || path.startsWith(sp + "?")) {
          siteId = id;
          break;
        }
      }
    }
    if (siteId) break;
  }

  if (!siteId) return;

  var rule = SITES[siteId];
  var url = new URL(window.location.href);
  var params = url.searchParams;

  var sortKey = siteId + "_sort";
  var enabledKey = siteId + "_enabled";

  var defaults = {};
  defaults[enabledKey] = true;
  defaults[sortKey] = rule.defaultSort;

  chrome.storage.local.get(defaults, function (prefs) {
    if (!prefs[enabledKey]) return;

    var currentSort = params.get(rule.sortParam);

    // Sort already present — save as sticky preference, don't redirect
    if (currentSort) {
      if (currentSort !== prefs[sortKey]) {
        var update = {};
        update[sortKey] = currentSort;
        chrome.storage.local.set(update);
      }
      return;
    }

    // No sort param = site defaulted to "relevance" — apply recency preference
    params.set(rule.sortParam, prefs[sortKey]);

    // Set any additional params (e.g. GitHub needs o=desc alongside s=updated)
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
})();
