module.exports = function (context, req) {
    var body = req.body || {}
    var cb = context.done
    var version = body.version || "1.0"

    context.res = {
        status: 200,
        body: buildCard("test", version)
    }
    cb()
}

function buildCard(username, version) {
    return {
        "version": version,
        "response": {
            "outputSpeech": {
                "type":"PlainText",
                "text": username
            },
            "card": {
                "type": "Simple",
                "title": "Your new username",
                "content": "Hi, we generated you a username.\nIt's " + username + ". Enjoy!"
            }
        },
        "shouldEndSession": true
    }
}