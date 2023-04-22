function shout(string) {
    return string.toUpperCase();
}
function whisper(string) {
    return string.toLowerCase();
}
function logShout(string) {
    console.log("HELLO");
}
function logWhisper(string) {
    console.log("hello");
}
function sayHiToHeadphonedRoommate(string) {
    let message;
    switch (string) {
        case string.toLowerCase():
            message = "I can't hear you!";
            break;
        case string.toUpperCase():
            message = "YES INDEED!";
            break;
        case "Let's have dinner together!":
            message = "I would love to!";
            break;
    }
    return message;
}
