// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

tabAction();

function tabAction(){
    var openTabs = new Array();
    var youtubeTabs = new Array();

    chrome.tabs.query({}, function (tabs) {
        for (var i = 0; i < tabs.length; i++) {
            openTabs[i] = tabs[i];
        }
        // Moved code inside the callback handler
        for (var i = 0; i < openTabs.length; i++) {
            if (openTabs[i].url.includes("youtube")){
                window.console.log(openTabs[i].url);
                youtubeTabs.push(openTabs[i].url);
            }
        }

        window.console.log(youtubeTabs);

    });
}

chrome.tabs.onCreated.addListener(function(tab) {         
    tabAction();
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    tabAction();
});