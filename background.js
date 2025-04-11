
chrome.action.onClicked.addListener((tab) => {
    if (tab.url.includes('web.whatsapp.com')) return;

    chrome.tabs.query({ url: "https://web.whatsapp.com/*" }, (tabs) => {
        if (tabs.length > 0) {
            chrome.tabs.update(tabs[0].id, { active: true });
        } else {
            chrome.tabs.create({ url: "https://web.whatsapp.com" });
        }
    })
})

chrome.runtime.onMessage.addListener((mensaje, remitente, responder) => {

})