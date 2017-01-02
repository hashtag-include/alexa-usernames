// https://webtask.io/docs/model
module.exports = function (context) {
    var body = context.req.body || {}
    var cb = context.done

    validate(body, function (err) {
        if (err) return cb(err)
        else return generate(cb, body.version || "1.0")
    })
}

function validate(body, cb) {
    return cb(null)
}

function generate(cb, version) {
    return cb(buildCard("test", version))
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