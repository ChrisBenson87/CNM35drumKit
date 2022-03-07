const bassDrum = document.getElementById("bassDrum");
const bassDrumAudio = document.getElementById("bassDrumAudio");
const snareDrum = document.getElementById("snareDrum");
const snareDrumAudio = document.getElementById("snareDrumAudio");
const highTomDrum = document.getElementById("highTomDrum");
const highTomDrumAudio = document.getElementById("highTomDrumAudio");
const midTomDrum = document.getElementById("midTomDrum");
const floorTomDrum = document.getElementById("floorTomDrum");
const floorTomDrumAudio = document.getElementById("floorTomDrumAudio");
const hiHatCymbal = document.getElementById("hiHatCymbal");
const hiHatCymbalAudio = document.getElementById("hiHatCymbalAudio");
const crashCymbal = document.getElementById("crashCymbal");
const crashCymbalAudio = document.getElementById("crashCymbalAudio");
const rideCymbal = document.getElementById("rideCymbal");
const rideCymbalAudio = document.getElementById("rideCymbalAudio");

bassDrum.addEventListener("click", () =>{
    bassDrumAudio.play();
});

document.addEventListener("keypress", (event) =>{
    if(event.key === "q" || event.key === "Q"){
        bassDrumAudio.play();
    }
});

snareDrum.addEventListener("click", () =>{
    snareDrumAudio.play();
});

document.addEventListener("keypress", (event) =>{
    if(event.key == "w" || event.key == "W"){
        snareDrumAudio.play();
    }
});

highTomDrum.addEventListener("click", () =>{
    highTomDrumAudio.play();
});

document.addEventListener("keypress", (event) =>{
    if(event.key == "e" || event.key == "E"){
        highTomDrumAudio.play();
    }
});

midTomDrum.addEventListener("click", () =>{
    highTomDrumAudio.play();
});

document.addEventListener("keypress", (event) =>{
    if(event.key == "r" || event.key == "R"){
        highTomDrumAudio.play();
    }
});

floorTomDrum.addEventListener("click", () =>{
    floorTomDrumAudio.play();
});

document.addEventListener("keypress", (event) =>{
    if(event.key == "a" || event.key == "R"){
        floorTomDrumAudio.play();
    }
});

hiHatCymbal.addEventListener("click", () =>{
    hiHatCymbalAudio.play();
});

document.addEventListener("keypress", (event) =>{
    if(event.key == "s" || event.key == "S"){
        hiHatCymbalAudio.play();
    }
});

crashCymbal.addEventListener("click", () =>{
    crashCymbalAudio.play();
});

document.addEventListener("keypress", (event) =>{
    if(event.key == "d" || event.key == "D"){
        crashCymbalAudio.play();
    }
});

rideCymbal.addEventListener("click", () =>{
    rideCymbalAudio.play();
});

document.addEventListener("keypress", (event) =>{
    if(event.key == "f" || event.key == "F"){
        rideCymbalAudio.play();
    }
});