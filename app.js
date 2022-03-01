const drumPart = document.getElementById("drumPart"); //should be targeting the button class
const playAudio = document.getElementById("drumAudio"); //should be targeting the audio path

drumPart.addEventListener("click", () => { //should ask the button to listen to a click
    playAudio.play(); //should play the audio path when clicked
})