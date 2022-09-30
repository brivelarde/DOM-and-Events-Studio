// Write your JavaScript code here.
// Remember to pay attention to page loading!

//1. add load event listener
window.addEventListener('load', function(event) {

    //2. Take off sequence
    let takeOff = document.getElementById("takeoff");
    takeOff.addEventListener("click", function(event) {
        let confirmTakeOff = window.confirm("Confirm shuttle is ready for takeoff.");
        if (confirmTakeOff) {
           document.getElementById("flightStatus").innerHTML = "Shuttle in flight";
           document.getElementById("shuttleBackground").style.backgroundColor = "blue";
           document.getElementById("spaceShuttleHeight").innerHTML = 10000;
        }
    });

    //3. Landing sequence
    let landing = document.getElementById("landing");
    landing.addEventListener("click", function(event) {
        if (document.getElementById("flightStatus").innerHTML != "Shuttle in flight") {
            window.alert("Shuttle is grounded. Take off to start flying!")
        } else {
            window.alert("The shuttle is landing. Landing gear engaged");
            document.getElementById("flightStatus").innerHTML = "The shuttle has landed";
            document.getElementById("shuttleBackground").style.backgroundColor = "green";
            document.getElementById("spaceShuttleHeight").innerHTML = 0;
            rocket.style.top = "250px";
            rocket.style.left = "352px";
        }
    });

    //4. Abort Mission sequence
    let abortMission = document.getElementById("missionAbort");
    abortMission.addEventListener("click", function(event) {
        if (document.getElementById("flightStatus").innerHTML != "Shuttle in flight") {
            window.alert("Shuttle is grounded. Take off to start flying!")
        } else {
            let confirmAbort = window.confirm("Confirm that you want to bort the mission");
            if (confirmAbort) {
                document.getElementById("flightStatus").innerHTML = "Mission aborted.";
                document.getElementById("shuttleBackground").style.backgroundColor = "green";
                document.getElementById("spaceShuttleHeight").innerHTML = 0;
                rocket.style.top = "250px";
                rocket.style.left = "352px";
            }
        }
    });

    //5. Movement buttons
    const rocket = document.getElementById("rocket");
    
    let up = document.getElementById("up");
    up.addEventListener("click", function(event) {
        if (document.getElementById("flightStatus").innerHTML != "Shuttle in flight") {
            window.alert("Shuttle is grounded. Take off to start flying!")
        } else {
            if (document.getElementById("spaceShuttleHeight").innerHTML < 260000) {
                document.getElementById("spaceShuttleHeight").innerHTML = (parseInt(document.getElementById("spaceShuttleHeight").innerHTML) + 10000);
            } 
            rocket.style.top = movement("top", -10)
        }
    });

    let down = document.getElementById("down");
    down.addEventListener("click", function(event) {
        if (document.getElementById("flightStatus").innerHTML != "Shuttle in flight") {
            window.alert("Shuttle is grounded. Take off to start flying!")
        } else {
            if (document.getElementById("spaceShuttleHeight").innerHTML > 0) {
                document.getElementById("spaceShuttleHeight").innerHTML = (parseInt(document.getElementById("spaceShuttleHeight").innerHTML) - 10000);
            } 
        
            rocket.style.top = movement("top", 10)
        }
    });

    let right = document.getElementById("right");
    right.addEventListener("click", function(event) {
        if (document.getElementById("flightStatus").innerHTML != "Shuttle in flight") {
            window.alert("Shuttle is grounded. Take off to start flying!")
        } else {
            rocket.style.left = movement("left", 10)
        }
    });

    let left = document.getElementById("left");
    left.addEventListener("click", function(event) {
        if (document.getElementById("flightStatus").innerHTML != "Shuttle in flight") {
            window.alert("Shuttle is grounded. Take off to start flying!")
        } else {
            rocket.style.left = movement("left", -10)
        }
    });

    let movement = function(position, amount) {
        if (position === "left") {
            let currentPosition = getComputedStyle(rocket).left;
            let pixel = parseInt(currentPosition.split("px"));
            if ((amount > 0 && pixel < 700) || (amount < 0 && pixel > -15)) {
                String(pixel += amount);
                return pixel + "px"
            }
        }  else if (position === "top") {
            let currentPosition = getComputedStyle(rocket).top;
            let pixel = parseInt(currentPosition.split("px"));
            if ((amount < 0 && pixel > 0) || (amount > 0 && pixel < 250)) {
                String(pixel += amount);
                return pixel + "px"
            }
        }
    };


})
