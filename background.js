"use strict";

//////////////////////////////////////////////////////////////////////////
// Google Analytics                                                     //
//////////////////////////////////////////////////////////////////////////

// log events
function logEvent(eventType) {}

chrome.runtime.onInstalled.addListener(function (details) {
  if (details.reason == "install") {
    console.log("This is a first install!");
    var thisVersion = chrome.runtime.getManifest().version;
    logEvent("install");
    chrome.tabs.create(
      { url: "https://www.netflixparty.com/tutorial" },
      function () {
        console.log("created new tab after install");
      }
    );
  } else if (details.reason == "update") {
    var thisVersion = chrome.runtime.getManifest().version;
    console.log(
      "Updated from " + details.previousVersion + " to " + thisVersion + "!"
    );
    logEvent("update-" + thisVersion); // 16 chars max
  }
});

chrome.storage.onChanged.addListener(function (changes, areaName) {
  console.log(
    "storage change: " +
      JSON.stringify(changes) +
      " for " +
      JSON.stringify(areaName)
  );
});

//////////////////////////////////////////////////////////////////////////
// Autoupdate                                                           //
//////////////////////////////////////////////////////////////////////////
chrome.runtime.onUpdateAvailable.addListener(function (details) {
  // console.log("updating to version " + details.version);
  //_gaq.push(['_trackEvent', 'auto-update ->' + details.version, 'clicked']);
  chrome.runtime.reload();
});

// chrome.runtime.requestUpdateCheck(function(status) {
//   if (status == "update_available") {
//     console.log("update pending...");
//   } else if (status == "no_update") {
//     console.log("no update found");
//   } else if (status == "throttled") {
//     console.log("Oops, I'm asking too frequently - I need to back off.");
//   }
// });

//////////////////////////////////////////////////////////////////////////
// User Authentication                                                  //
//////////////////////////////////////////////////////////////////////////

try {
  function validateId(id) {
    return typeof id === "string" && id.length === 16;
  }

  // Ensure that chrome extension has unique userid
  function setUserId() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState == XMLHttpRequest.DONE) {
        var userId = xhr.responseText;
        if (validateId(userId)) {
          chrome.storage.local.set(
            { userId: userId, recentlyUpdated: true },
            function () {
              console.log("Settings saved");
            }
          );
        }
      }
    };
    xhr.open("GET", "https://data2.netflixparty.com/create-userId", true);
    xhr.send(null);
  }

  // Ensure that chrome extension resets unique userid
  function resetUserId(oldUserId) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState == XMLHttpRequest.DONE) {
        var userId = xhr.responseText;
        if (validateId(userId)) {
          chrome.storage.local.set(
            { userId: userId, oldUserId: oldUserId, recentlyUpdated: true },
            function () {
              console.log("Settings saved");
            }
          );
        }
      }
    };
    xhr.open("GET", "https://data2.netflixparty.com/create-userId", true);
    xhr.send(null);
  }

  chrome.storage.local.get(null, function (data) {
    // message('Settings retrieved', items);
    if (!data.userId) {
      console.log("userId undefined in local storage -> now setting");
      setUserId();
    } else {
      if (!data.recentlyUpdated) {
        console.log("userId undefined in local storage -> now setting");
        resetUserId(data.userId);
      } else {
        console.log("chrome storage local has user id: " + data.userId);
      }
    }
  });
} catch (e) {
  console.log("user auth error");
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(
    sender.tab
      ? "from a content script:" + sender.tab.url
      : "from the extension"
  );
  if (request.summary) {
    var xmlhttp = new XMLHttpRequest(); // new HttpRequest instance
    xmlhttp.open("POST", "https://data2.netflixparty.com/log-summary", true);
    xmlhttp.setRequestHeader("Content-Type", "application/json");
    xmlhttp.send(JSON.stringify(request.summary));

    sendResponse({ farewell: "goodbye" });
  }
});

//////////////////////////////////////////////////////////////////////////
// Track tabs                                                           //
//////////////////////////////////////////////////////////////////////////
// function my_listener(tabId, changeInfo, tab) {
//   // If updated tab matches this one
//   if (changeInfo.status == "complete") {
//     _gaq.push(['_trackEvent', 'tab-update', 'clicked']);
//   }
// }

// chrome.tabs.onUpdated.addListener(my_listener);

//////////////////////////////////////////////////////////////////////////
// Background Logic                                                     //
//////////////////////////////////////////////////////////////////////////

// only load for URLs that match www.netflix.com/watch/*
// chrome.runtime.onInstalled.addListener(function(details) {
//   chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
//     chrome.declarativeContent.onPageChanged.addRules([{
//       conditions: [
//         new chrome.declarativeContent.PageStateMatcher({
//           pageUrl: {
//             hostContains: '.netflix.',
//             pathPrefix: '/watch/',
//             schemes: ['http', 'https']
//           }
//         })
//       ],
//       actions: [new chrome.declarativeContent.ShowPageAction()]
//     }]);
//   });
// });

chrome.runtime.onInstalled.addListener(function (details) {
  chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    chrome.pageAction.show(tabId);
  });

  chrome.tabs.onCreated.addListener(function (tab) {
    chrome.pageAction.show(tab.id);
  });
});
