(function(window) {
  var byeSpeaker = {};
  byeSpeaker.speak = function speak(name) {
    console.log(speakWord + " " + name);
  }

  var speakWord = "Good Bye";

  window.byeSpeaker = byeSpeaker;

})(window);



