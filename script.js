// Write your JavaScript code here!
window.addEventListener("load", function () {
   console.log("pilot INPUT");
   let faultyItems = document.getElementById("faultyItems");
   faultyItems.style.visibility = "hidden";
   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");
   let fuelStatus = document.getElementById("fuelStatus");
   let cargoStatus = document.getElementById("cargoStatus");
   let launchStatus = document.getElementById("launchStatus")

   let formSubmit = document.querySelector("form");
   let pilotNameInput = document.querySelector("input[name=pilotName]");
   let copilotNameInput = document.querySelector("input[name=copilotName]");
   let fuelLevelInput = document.querySelector("input[name=fuelLevel]")


   let cargoMassInput = document.querySelector("input[name=cargoMass]")


   let pilotStatusInput = document.getElementById("pilotStatus");
   let copilotStatusInput = document.getElementById("copilotStatus");
   let fuelStatusInput = document.getElementById("fuelStatus");
   let cargoStatusInput = document.getElementById("cargoStatus");



   formSubmit.addEventListener("submit", function (event) {
      event.preventDefault();
      console.log("clicked");
      //console.log(fuelLevel);
      if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
         alert("Enter all required fields!! ");
         console.log("fuelLevelInput");
      }
      else if (isNaN(pilotNameInput.value) === false) {
         alert("Enter valid Pilot name");
         console.log("pilotName")
      }
      else if (isNaN(copilotNameInput.value) === false) {
         alert("Enter valid Copilot name in character");
      }
      else if (isNaN(fuelLevelInput.value) === true) {
         alert("Enter valid fuelLevel in number!!");
         console.log("test")
      }
      else if (isNaN(cargoMassInput.value) === true) {
         alert("Enter valid cargo mass in numbers!!")
      }

      else {

         faultyItems.style.visibility = "visible";
         pilotStatus.innerHTML = `${pilotNameInput.value} is  ready for launch`;
         copilotStatus.innerHTML = `${copilotNameInput.value} is  ready for launch`;
         if (fuelLevelInput.value < 10000 && cargoMassInput.value < 10000) {
            fuelStatus.innerHTML = "Fuel level to low for launch";
            fuelStatus.style.color = "red";
            cargoStatus.innerHTML = "Cargo mass low enough for launch";
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "red";

         } else if (fuelLevelInput.value > 10000 && cargoMassInput.value > 10000) {
            fuelStatus.innerHTML = "Fuel level is high enough for launch";
            cargoStatus.style.color = "red";
            cargoStatus.innerHTML = "Cargo mass is too much for launch";
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "red";
         } else {
            fuelStatus.innerHTML = "Fuel level is high enough for launch";
            cargoStatus.innerHTML = "Cargo mass low enough for launch";
            launchStatus.innerHTML = "Shuttle is ready for launch";
            launchStatus.style.color = "green";
         }

      }
   });

   fetch("https://handlers.education.launchcode.org/static/planets.json")
      .then(function (response) {
         //console.log("output1",response.json);
         return response.json();
      })
      .then(function (json) {
         //console.log("output 2" ,data);
         data = json[Math.floor(Math.random() * json.length)];

         const missionTargetInput = document.getElementById("missionTarget");

         missionTargetInput.innerHTML = `<h2>Mission Destination</h2> 
     <ol>
     <li>Name:${data.name} </li>
     <li>Diameter: ${data.diameter}</li>
   <li>Star: ${data.star}</li>
   <li>Distance from Earth:${data.distance} </li>
   <li>Number of Moons:${data.moons} </li>
     </ol>
     <img src="${data.image}">
     `;
         missionTarget.addEventListener("click", function (event) {
            data = json[Math.floor(Math.random() * json.length)];

            const missionTargetInput = document.getElementById("missionTarget");

            missionTargetInput.innerHTML = `<h2>Mission Destination</h2> 
     <ol>
     <li>Name:${data.name} </li>
     <li>Diameter: ${data.diameter}</li>
   <li>Star: ${data.star}</li>
   <li>Distance from Earth:${data.distance} </li>
   <li>Number of Moons:${data.moons} </li>
     </ol>
     <img src="${data.image}">
     `;
         });

      })
      .catch(function (err) {
         console.log(err);
      });

});
/*window.addEventListener("load",function(){
   fetch("https://handlers.education.launchcode.org/static/planets.json")
   .then(function(response){
     //console.log("output1",response.json);
     return response.json();
   })
   .then (function(json){
   //console.log("output 2" ,data);
   data=json[Math.floor(Math.random() * json.length)];

     const  missionTargetInput=document.getElementById("missionTarget");

     missionTargetInput.innerHTML= `<h2>Mission Destination</h2>
     <ol>
     <li>Name:${data.name} </li>
     <li>Diameter: ${data.diameter}</li>
   <li>Star: ${data.star}</li>
   <li>Distance from Earth:${data.distance} </li>
   <li>Number of Moons:${data.moons} </li>
     </ol>
     <img src="${data.image}">
     `;
   missionTarget.addEventListener("click",function(event){
    data=json[Math.floor(Math.random() * json.length)];

     const  missionTargetInput=document.getElementById("missionTarget");

     missionTargetInput.innerHTML= `<h2>Mission Destination</h2>
     <ol>
     <li>Name:${data.name} </li>
     <li>Diameter: ${data.diameter}</li>
   <li>Star: ${data.star}</li>
   <li>Distance from Earth:${data.distance} </li>
   <li>Number of Moons:${data.moons} </li>
     </ol>
     <img src="${data.image}">
     `;
     });

     })
     .catch(function (err){
        console.log(err);
     });


});*/
/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
