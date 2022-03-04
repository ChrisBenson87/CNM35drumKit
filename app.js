const bassDrum = document.getElementById("bassDrum");
const bassDrumAudio = document.getElementById("bassDrumAudio");
const snareDrum = document.getElementById("snareDrum");
const snareDrumAudio = document.getElementById("snareDrumAudio");
const highTomDrum = document.getElementById("highTomDrum");
const highTomDrumAudio = document.getElementById("highTomDrumAudio");
const midTomDrum = document.getElementById("midTomDrum");
const floorTomDrum = document.getElementById("floorTomDrum");
const hiHatCymbal = document.getElementById("hiHatCymbal");
const hiHatCymbalAudio = document.getElementById("hiHatCymbalAudio");
const crashCymbal = document.getElementById("crashCymbal");
const crashCymbalAudio = document.getElementById("crashCymbalAudio");
const rideCymbal = document.getElementById("rideCymbal");

bassDrum.addEventListener("click", () =>{
    bassDrumAudio.play();
});

snareDrum.addEventListener("click", () =>{
    snareDrumAudio.play();
});

highTomDrum.addEventListener("click", () =>{
    highTomDrumAudio.play();
});

midTomDrum.addEventListener("click", () =>{
    highTomDrumAudio.play();
});

floorTomDrum.addEventListener("click", () =>{
    highTomDrumAudio.play();
});

hiHatCymbal.addEventListener("click", () =>{
    hiHatCymbalAudio.play();
});

crashCymbal.addEventListener("click", () =>{
    crashCymbalAudio.play();
});

rideCymbal.addEventListener("click", () =>{
    crashCymbalAudio.play();
});