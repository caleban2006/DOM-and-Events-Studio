let takeoff = null;
let landing = null;
let missionAbort = null;
let flightStatus = null;
let spaceShuttleHeight = null;

function init() {
    takeoff = document.getElementById("takeoff");
    flightStatus = document.getElementById("flightStatus");
    spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    landing = document.getElementById("landing");
    missionAbort = document.getElementById("missionAbort");
    takeoff.addEventListener("click", function() {
        if (window.confirm("Confirm that the shuttle is ready for takeoff."))
        {flightStatus.innerHTML = "Shuttle in flight.";
        document.getElementById("shuttleBackground").style.background = "blue";
        spaceShuttleHeight.innerHTML = "10000"};
    });
    landing.addEventListener("click", function() {
        window.alert("The shuttle is landing.  Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        document.getElementById("shuttleBackground").style.background = "green";
        spaceShuttleHeight.innerHTML = "0";
    });
    missionAbort.addEventListener("click", function() {
        if (window.confirm("Confirm that you want to abort the mission."))
        {flightStatus.innerHTML = "Mission aborted.";
        document.getElementById("shuttleBackground").style.background = "green";
        spaceShuttleHeight.innerHTML = "0"}
    });     
}

// Write your JavaScript code here.
// Remember to pay attention to page loading!


window.onload = init;
