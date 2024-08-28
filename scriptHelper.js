// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    let div = document.getElementById("missionTarget");
    div.innerHTML = 
            `<h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="${imageUrl}">`
    
 };
 
 function validateInput(testInput) {
    if (testInput === "")
        return "Empty";
    else if (isNaN(testInput) === false)
        return "Is a Number";
    else 
        return "Not a Number";
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
        
        let h2 = document.getElementById("launchStatus");
              
        document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
        document.getElementById("copilotStatus").innerHTML =`Co-pilot ${copilot} is ready for launch`;
        document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
        document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
        
        if (fuelLevel < 10000) {
            document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
            list.style.visibility = "visible";
            h2.style.color = "red";
            h2.innerHTML = "Shuttle Not Ready for Launch";
        }
        if (cargoLevel > 10000){
            document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";
            list.style.visibility = "visible";
            h2.style.color = "red";
            h2.innerHTML = "Shuttle Not Ready for Launch";
        }
        if (fuelLevel >= 10000 && cargoLevel <= 10000){
            h2.style.color = "green";
            h2.innerHTML = "Shuttle is Ready for Launch";
        }
    };
    


 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
         });

     return planetsReturned;
 }
 
 function pickPlanet(planets) {
     let planetsNum = planets.length;
     return planets[Math.floor(Math.random()*planetsNum)];
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;