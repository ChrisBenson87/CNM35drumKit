const drumPart = document.getElementsByClassName("drumPart") //should be targeting the button class
const drumAudio = document.getElementById("drumAudio") //should be target the audio path

drumPart.addEventListener("click", () => { //should ask the button to listen to a click
    Audio.Play(drumAudio); //should play the audio path when click
})