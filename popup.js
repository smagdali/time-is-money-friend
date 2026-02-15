var $sites = document.getElementById("sites");
var $reset = document.getElementById("reset");

var allDefaults = {};
var siteIds = Object.keys(SITES);

// Build UI for each site
siteIds.forEach(function (id) {
  var site = SITES[id];
  var enabledKey = id + "_enabled";
  var sortKey = id + "_sort";

  allDefaults[enabledKey] = true;
  allDefaults[sortKey] = site.defaultSort;

  var section = document.createElement("div");
  section.className = "site-section";

  // Enable checkbox + site name
  var header = document.createElement("div");
  header.className = "site-header";
  var label = document.createElement("label");
  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = enabledKey;
  checkbox.checked = true;
  label.appendChild(checkbox);
  label.appendChild(document.createTextNode(" " + site.name));
  header.appendChild(label);
  section.appendChild(header);

  // Sort dropdown
  var setting = document.createElement("div");
  setting.className = "setting";
  var sortLabel = document.createElement("label");
  sortLabel.setAttribute("for", sortKey);
  sortLabel.textContent = "Sort by";
  var select = document.createElement("select");
  select.id = sortKey;
  site.sortOptions.forEach(function (opt) {
    var option = document.createElement("option");
    option.value = opt.value;
    option.textContent = opt.label;
    select.appendChild(option);
  });
  setting.appendChild(sortLabel);
  setting.appendChild(select);
  section.appendChild(setting);

  $sites.appendChild(section);
});

// Load saved preferences
chrome.storage.local.get(allDefaults, function (prefs) {
  siteIds.forEach(function (id) {
    document.getElementById(id + "_enabled").checked = prefs[id + "_enabled"];
    document.getElementById(id + "_sort").value = prefs[id + "_sort"];
  });
});

// Save on any change (delegated)
$sites.addEventListener("change", function (e) {
  var el = e.target;
  var update = {};
  if (el.type === "checkbox") {
    update[el.id] = el.checked;
  } else if (el.tagName === "SELECT") {
    update[el.id] = el.value;
  }
  if (Object.keys(update).length) {
    chrome.storage.local.set(update);
  }
});

// Reset all to recency defaults
$reset.addEventListener("click", function () {
  chrome.storage.local.set(allDefaults, function () {
    siteIds.forEach(function (id) {
      document.getElementById(id + "_enabled").checked = true;
      document.getElementById(id + "_sort").value = SITES[id].defaultSort;
    });
  });
});
