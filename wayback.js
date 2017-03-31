/*global chrome*/
var saveUrl = function (tab) {
    'use strict';
    var url = 'https://web.archive.org/save/' + encodeURI(tab.url);
    chrome.tabs.create({url: url});
};

chrome.contextMenus.create({
    title: "Save to Wayback Machine",
    onclick: function (info, tab) {
        'use strict';
        saveUrl(tab);
    }
});

chrome.browserAction.onClicked.addListener(saveUrl);
