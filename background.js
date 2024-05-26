// background.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "generateReply") {
        fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'API_Key'
            },
            body: JSON.stringify({
                prompt: `Generate a reply to this tweet: "${request.tweet}"`,
                max_tokens: 60
            })
        })
        .then(response => response.json())
        .then(data => {
            sendResponse({reply: data.choices[0].text});
        })
        .catch(error => {
            console.error('Error:', error);
            sendResponse({error: error.toString()});
        });
        return true;
    }
});
