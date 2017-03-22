// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

var settings = new Store("settings", {
    "sample_setting": "test"
});

chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
    alert(tabs[0].url);
});
