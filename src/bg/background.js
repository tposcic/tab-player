// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

var openTabs = new Array();
chrome.tabs.query({}, function (tabs) {
    for (var i = 0; i < tabs.length; i++) {
        openTabs[i] = tabs[i];
    }
    // Moved code inside the callback handler
    for (var i = 0; i < openTabs.length; i++) {
        if (openTabs[i] != null)
           window.console.log(openTabs[i].url);
        else {
            window.console.log("??" + i);
        }
    }
});
/*
var settings = new Store("settings", {
    "sample_setting": "test"
});
*/

