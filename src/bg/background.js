// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

function tabAction(){
    var openTabs = new Array();

    chrome.tabs.query({}, function (tabs) {
        for (var i = 0; i < tabs.length; i++) {
            openTabs[i] = tabs[i];
        }
        // Moved code inside the callback handler
        for (var i = 0; i < openTabs.length; i++) {
            if (openTabs[i] != null && openTabs[i].url.includes("youtube")){
            window.console.log(openTabs[i].url);
            }
        }
    });

}

chrome.tabs.onCreated.addListener(function(tab) {         
    tabAction();
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    tabAction();
});


/*
var settings = new Store("settings", {
    "sample_setting": "test"
});
*/
