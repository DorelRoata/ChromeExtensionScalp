import os
import webbrowser

# Register Chrome as the browser to use
webbrowser.register(
    'chrome',
    None,
    webbrowser.BackgroundBrowser(r"C:\Program Files\Google\Chrome\Application\chrome.exe")
)

# Open the link in Chrome
webbrowser.get('chrome').open("https://www.zoro.com/i/G0532226/")
