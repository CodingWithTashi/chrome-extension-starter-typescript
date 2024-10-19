import { Message } from "./common"

// Ensure the background script always runs.
chrome.runtime.onStartup.addListener(startUp)

chrome.runtime.onInstalled.addListener(firstTimeInstalled)

/**
 * When data is sent from popup.ts, content.ts or any other script
 */
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  const message = request as Message
  if (message.enabled !== undefined) {
    console.log(
      "Service worker received message from sender %s",
      sender.id,
      request,
    )
    sendResponse({ message: "Service worker processed the message" })
  }
})

/**
 * Create Context menu, right click menu, you can create multiple context menu
 */
chrome.contextMenus.create({
  id: "readOutLoud",
  title: "Generate Voice",
  contexts: ["selection"],
})

/**Context menu listener */
chrome.contextMenus.onClicked.addListener(function (info, tab) {
  /**
   * Send data to popup.ts
   */
  if (tab?.id) {
    chrome.tabs.sendMessage(
      tab.id,
      { action: info.menuItemId },
      (response) => {},
    )
  }
})

function startUp() {
  console.log("Service worker started")
}
function firstTimeInstalled() {
  console.log("Service worker installed")
}
