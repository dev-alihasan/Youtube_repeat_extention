// background.js
chrome.runtime.onMessage.addListener((message, sender) => {
    chrome.scripting.executeScript({
      target: { tabId: message.tabId },
      function: setVideoToLoop,
    });
  });
  
  function setVideoToLoop() {
    const video = document.querySelector("video");
    if (video) {
      video.loop = true;
    }
  }
  