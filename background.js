chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'DATA_COLLECTED') {
    console.log("Got data from content script:", message.data);

    // POST to Flask
    fetch("http://localhost:5000/extensiondata", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(message.data)
    })
    .then(response => response.text())
    .then(text => {
      console.log("Server replied:", text);

      // OPTIONAL: close the tab after 5s
       if (sender.tab?.id) {
         setTimeout(() => {
           chrome.tabs.remove(sender.tab.id);
         }, 5000);
       }
    })
    .catch(err => console.error("Error sending data:", err));

    // Return true if needed to keep service worker alive for async tasks
    return true;
  }
});
