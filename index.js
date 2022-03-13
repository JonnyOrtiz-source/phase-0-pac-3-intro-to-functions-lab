function shout(string) {
  return string.toUpperCase();
}
console.log(shout("Hello"));

function whisper(string) {
  return string.toLowerCase();
}
console.log(whisper("Hello"));

function logShout(string) {
  console.log(string.toUpperCase());
}
logShout("yo!");

function logWhisper(string) {
  console.log(string.toLowerCase());
}
logWhisper("sshhh");

function sayHiToHeadphonedRoommate(string) {
  if (string === string.toLowerCase()) {
    return "I can't hear you!";
  }
  if (string === string.toUpperCase()) {
    return "YES INDEED!";
  }
  if (string === "Let's have dinner together!") {
    return "I would love to!";
  }
}
console.log(sayHiToHeadphonedRoommate("Let's have dinner together!"));
console.log(sayHiToHeadphonedRoommate("YES INDEED!"));
console.log(sayHiToHeadphonedRoommate("hey"));
