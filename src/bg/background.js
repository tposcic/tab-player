// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

var settings = new Store("settings", {
    "sample_setting": "test"
});

chrome.extension.onMessage.addListener(function(a,b,s) {
chrome.tabs.query({
     'active': true,
     'lastFocusedWindow': true
 },
 function(tabs) {
   if (tabs[0]) {
     alert('chrome.tabs.query: ' + tabs[0].windowId);
   } else {
     alert('chrome.tabs.query: NO TAB FOUND!');
   }
   if (tabs.length > 1) {
     alert('chrome.tabs.query: MORE THAN ONE TABs ' + JSON.stringify(tabs));
   }
 });
 s({});
});
