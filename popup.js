document.getElementById('generateReply').addEventListener('click', () => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, {action: "getRecentTweet"}, (response) => {
            if (response.tweet) {
                chrome.runtime.sendMessage({action: "generateReply", tweet: response.tweet}, (response) => {
                    if (response.reply) {
                        document.getElementById('reply').innerText = response.reply;
                    } else {
                        document.getElementById('reply').innerText = 'Error: ' + response.error;
                    }
                });
            }
        });
    });
});
