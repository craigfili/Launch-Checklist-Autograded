// Write your JavaScript code here!

window.addEventListener("load", function() {

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
    }).then(function () {
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let planetsResponse = pickPlanet(listedPlanets);
        addDestinationInfo(document, planetsResponse.name, planetsResponse.diameter,
            planetsResponse.star, planetsResponse.moons, planetsResponse.distance,
            planetsResponse.image
        );
    })
    
 });

 window.addEventListener("load", function(){
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event){
        let pilotName = document.querySelector("input[name=pilotName]");
        let copilotName = document.querySelector("input[name=copilotName]");
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let cargoMass = document.querySelector("input[name=cargoMass]");
        let list = document.getElementById("faultyItems");
        if (validateInput(pilotName.value)==="Empty"||validateInput(copilotName.value)==="Empty"||
        validateInput(fuelLevel.value)==="Empty"||validateInput(cargoMass.value)==="Empty"){
            alert("All fields are required!");
            event.preventDefault();
            }
        else if (validateInput(pilotName.value)==="Is a Number"||validateInput(copilotName.value)==="Is a Number"){
            alert("Pilot and Copilot names must be letters");
            event.preventDefault();
            }
        else if (validateInput(fuelLevel.value)==="Not a Number"||validateInput(cargoMass.value)==="Not a Number"){
            alert("Fuel Level and Cargo level must be a numerical value");
            event.preventDefault();
            }
        else {
        event.preventDefault();
        formSubmission(document, list, pilotName.value, copilotName.value, fuelLevel.value, cargoMass.value);}
        
    });
 });
 