let takeoff = null;
let landing = null;
let missionAbort = null;
let flightStatus = null;
let spaceShuttleHeight = null;
let upButton = null;
let downButton = null;
let leftButton = null;
let rightButton = null;
let rocket = null;

function init() {
    takeoff = document.getElementById("takeoff");
    flightStatus = document.getElementById("flightStatus");
    spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    landing = document.getElementById("landing");
    missionAbort = document.getElementById("missionAbort");
    upButton = document.getElementById("upButton");
    downButton = document.getElementById("downButton");
    rightButton = document.getElementById("rightButton");
    leftButton = document.getElementById("leftButton");
    rocket = document.getElementById("rocket");
    takeoff.addEventListener("click", function() {
        if (window.confirm("Confirm that the shuttle is ready for takeoff."))
        {flightStatus.innerHTML = "Shuttle in flight.";
        document.getElementById("shuttleBackground").style.background = "blue";
        spaceShuttleHeight.innerHTML = 10000};
    });
    landing.addEventListener("click", function() {
        window.alert("The shuttle is landing.  Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        document.getElementById("shuttleBackground").style.background = "green";
        spaceShuttleHeight.innerHTML = 0;
    });
    missionAbort.addEventListener("click", function() {
        if (window.confirm("Confirm that you want to abort the mission."))
        {flightStatus.innerHTML = "Mission aborted.";
        document.getElementById("shuttleBackground").style.background = "green";
        spaceShuttleHeight.innerHTML = 0}
    });
    rightButton.addEventListener("click", function () {
        let oldPosition = rocket.style.right.split("px")[0]
        let newPosition = Number(oldPosition)-10;
        rocket.style.right = newPosition+"px";
    });
    leftButton.addEventListener("click", function() {
        let oldPosition = rocket.style.right.split("px")[0]
        let newPosition = Number(oldPosition)+10;
        rocket.style.right = newPosition+"px";
    });
    upButton.addEventListener("click", function() {
        let oldPosition = rocket.style.bottom.split("px")[0]
        let newPosition = Number(oldPosition)+10;
        rocket.style.bottom = newPosition+"px";
        let newAltitude = Number(spaceShuttleHeight.innerHTML)+10000
        spaceShuttleHeight.innerHTML = String(newAltitude);
    });
    downButton.addEventListener("click", function() {
        let oldPosition = rocket.style.bottom.split("px")[0]
        let newPosition = Number(oldPosition)-10;
        rocket.style.bottom = newPosition+"px";
        let newAltitude = Number(spaceShuttleHeight.innerHTML)-10000
        spaceShuttleHeight.innerHTML = String(newAltitude);
    });
}

// Write your JavaScript code here.
// Remember to pay attention to page loading!


window.onload = init;
