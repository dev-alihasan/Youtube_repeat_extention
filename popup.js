// popup.js
chrome.action.onClicked.addListener((tab) => {
  chrome.runtime.sendMessage({ tabId: tab.id });
});
