// Write your JavaScript code here.
// Remember to pay attention to page loading!

//1. add load event listener
window.addEventListener('load', function(event) {

    //2. Take off sequence
    let takeOff = document.getElementById("takeoff");
    takeOff.addEventListener("click", function(event) {
        let confirmTakeOff = window.confirm("Confirm shuttle is ready for takeoff.");
        if (confirmTakeOff) {
           document.getElementById("flightStatus").innerHtml = "Shuttle in flight";
           document.getElementById("shuttleBackground").style.backgroundcolor = "blue";
           document.getElementById("spaceShuttleHeight").innerHtml = 10000;
        }
    });

    //3. Landing sequence
    let landing = document.getElementById("landing");
    landing.addEventListener("click", function(event) {
        window.alert("The shuttle is landing. Landing gear engaged");
        document.getElementById("flightStatus").innerHtml = "The shuttle has landed";
        document.getElementById("shuttleBackground").style.backgroundcolor = "green";
        document.getElementById("spaceShuttleHeight").innerHtml = 0;
    });

    //4. Abort Mission sequence
    let abortMission = document.getElementById("missionAbort");
    abortMission.addEventListener("click", function(event) {
        let confirmAbort = window.confirm("Confirm that you want to bort the mission");
        if (confirmAbort) {
            document.getElementById("flightStatus").innerHtml = "Mission aborted.";
            document.getElementById("shuttleBackground").style.backgroundcolor = "green";
            document.getElementById("spaceShuttleHeight").innerHtml = 0;
        }
    });

    //5. Movement buttons
    let up = document.getElementById("up");
    up.addEventListener("click", function(event) {
        document.getElementById("spaceShuttleHeight").innerHtml += 10000;
        document.getElementById("shuttleBackground").style.position +=
    })


})
