// https://webtask.io/docs/model
module.exports = function (context, req, res) {
    var body = req.body || {}
    var cb = context.done
    var version = body.version || "1.0"

    res = {
        status: 200,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(buildCard("test", version))
    }
    cb()
}

function buildCard(username, version) {
    return {
        "version": version,
        "response": {
            "outputSpeech": {"type":"PlainText","text":""},
            "card": {
            "type": "Simple",
            "title": username + " | Usernames.io",
            "content": "Hi, we generated you a username.\nIt's " + username + "."
            }
        }
    }
}