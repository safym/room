var radioDay = document.getElementById("radioDay")
var radioNight = document.getElementById("radioNight")

var radioLightOn = document.getElementById("radioLightOn")
var radioLightOff = document.getElementById("radioLightOff")

var radioCurtainOn = document.getElementById("radioCurtainOn")
var radioCurtainOff = document.getElementById("radioCurtainOff")

radioDay.addEventListener("click", changeTime, false)
radioNight.addEventListener("click", changeTime, false);

radioLightOn.addEventListener("click", changeLight, false)
radioLightOff.addEventListener("click", changeLight, false)

radioCurtainOn.addEventListener("click", changeCurtain, false)
radioCurtainOff.addEventListener("click", changeCurtain, false)

function changeTime(event) {

    var window = document.getElementById("window")
    var floor = document.getElementById("floor");
    var wall = document.getElementById("wall");

    if (event.target.id == "radioDay") {
        window.style.background = "linear-gradient(0deg, #faf0cd, #fab397)"
        // wall.style.backgroundSize ="2em 2em"
        // wall.style.backgroundImage = " linear-gradient(135deg, rgb(188, 152, 235) 25%, transparent 10%) -50px -0px, linear-gradient(225deg, rgb(188, 152, 235) 25%, transparent 10%) -50px -0px, linear-gradient(315deg, rgb(188, 152, 235) 25%, transparent 10%), linear-gradient(45deg,  rgb(188, 152, 235) 25%, transparent 10%)"
        wall.style.backgroundColor ="rgb(205, 170, 233)"
    }

    if (event.target.id == "radioNight") {
        window.style.background = "linear-gradient(0deg, #4b6cb7 0%, #182848 100%)"
        // wall.style.backgroundImage = "linear-gradient(135deg, rgb(138, 120, 202) 25%, transparent 10%) -50px -0px, linear-gradient(225deg, rgb(138, 120, 202) 25%, transparent 10%) -50px -0px, linear-gradient(315deg, rgb(138, 120, 202) 25%, transparent 10%), linear-gradient(45deg,  rgb(138, 120, 202) 25%, transparent 10%)"
        // wall.style.backgroundSize = "2em 2em"
        wall.style.backgroundColor = "rgb(145, 132, 202)"
    }
}

function changeLight(event) {
    var lightbulb = document.getElementById("lightbulb")

    if (event.target.id == "radioLightOn") {
        lightbulb.style.background = "rgba(255,255,255,1)" 
        lightbulb.style.boxShadow = "0px 4px 1000px 600px rgba(255, 241, 197, 0.4)"
        // lightbulb.style.boxShadow = "0px 2px 10px rgba(255,255,255,0.8), 0px 5px 50px rgba(255,255,255,0.8), 0px 8px 80px rgba(255,255,255,0.6), 0px 8px 120px rgba(255,255,255,0.6)"
    }

    if (event.target.id == "radioLightOff") {
        lightbulb.style.background = ""
        lightbulb.style.boxShadow = ""
    }
}

function changeCurtain(event) {
    var curtain = document.getElementById("curtain")

    if (event.target.id == "radioCurtainOn") {
        curtain.style.height = "90%"
    }

    if (event.target.id == "radioCurtainOff") {
        curtain.style.height = "10%"
    }
}


