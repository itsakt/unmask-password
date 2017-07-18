const onCreated = () => {
  if (chrome.runtime.lastError) {
    console.log(`Error: ${browser.runtime.lastError}`)
  } else {
    console.log('Item created successfully')
  }
}

chrome.contextMenus.create(
  {
    id: 'log-selection',
    title: chrome.i18n.getMessage('contextMenuItemUnmask'),
    contexts: ['editable'],
    onclick: (info, tab) => {
      chrome.tabs.sendMessage(tab.id, {}, function(response) {
        console.log(response)
      })
    }
  },
  onCreated
)
