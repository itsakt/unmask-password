let LAST_NODE

document.onmousedown = e => {
  console.log(e.target.nodeName)
  if (e.target.nodeName === 'INPUT') {
    LAST_NODE = event.target
  }
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  LAST_NODE.type = 'text'
  sendResponse(true)
})
