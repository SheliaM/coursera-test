(function (window) {
  var helloSpeaker = {};
  helloSpeaker.speak = function speak(name) {
  console.log(speakWord + " " + name);
  }
  
  var speakWord = "Hello";

  window.helloSpeaker = helloSpeaker

})(window);