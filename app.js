const drumPart = document.getElementsByClassName("drumPart")
const drumAudio = document.getElementById("drumAudio")

drumPart.addEventListener("click", () => {
    Audio.Play();
})