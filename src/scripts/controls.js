var radioDay = document.getElementById("radioDay")
var radioNight = document.getElementById("radioNight")

radioDay.addEventListener("click", changeTime, false)
radioNight.addEventListener("click", changeTime, false);

function changeTime(event) {

    console.log(event);

    var window = document.getElementById("window")
    var floor = document.getElementById("floor");
    var wall = document.getElementById("wall");

    if (event.target.id == "radioDay") {
        window.style.background = "linear-gradient(0deg, #faf0cd, #fab397)"
    }

    if (event.target.id == "radioNight") {
        window.style.background = "linear-gradient(0deg, #4b6cb7 0%, #182848 100%)"
    }
}

