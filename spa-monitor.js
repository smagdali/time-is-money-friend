// MAIN-world script: patches History API to notify content script of SPA navigations.
// Content scripts run in an isolated world and cannot intercept pushState/replaceState
// calls made by the page. This script runs in the page's MAIN world and dispatches a
// custom DOM event that the isolated-world content script can listen for.
(function () {
  "use strict";
  var dispatch = function () {
    window.dispatchEvent(new Event("__timf_urlchange"));
  };
  var orig = history.pushState;
  history.pushState = function () {
    orig.apply(this, arguments);
    dispatch();
  };
  var origReplace = history.replaceState;
  history.replaceState = function () {
    origReplace.apply(this, arguments);
    dispatch();
  };
})();
