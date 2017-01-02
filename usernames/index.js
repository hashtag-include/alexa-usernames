// https://webtask.io/docs/model
module.exports = function (context) {
    var body = context.req.body || {}
    var cb = context.done
    var version = body.version

    console.log(context.res)

    context.res = {
        status: 200,
        body: JSON.stringify(context.res.headers)
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