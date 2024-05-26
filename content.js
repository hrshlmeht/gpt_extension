console.log("Hello from content.js");

function getRecentTweet() {
    let tweet = document.querySelector('article div[lang]').innerText;
    return tweet;
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "getRecentTweet") {
        let recentTweet = getRecentTweet();
        sendResponse({tweet: recentTweet});
    }
});

