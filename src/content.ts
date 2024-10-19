import "./content.css"
/**
 * On message received from background script, handle in action
 */
chrome.runtime.onMessage.addListener(
  (message: { action: string }, sender, sendResponse) => {
    if (message.action === "readOutLoud") {
    } else if (message.action === "generateAndDownload") {
    }
    return true
  },
)

/** access icons folder */
// ttsButton.src = chrome.runtime.getURL("icons/icon16.png")
