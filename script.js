// Write your JavaScript code here!

fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
               // Access the JSON in the response
               response.json().then( function(json) {
				  
 const div = document.getElementById("missionTarget");
                  // Add HTML that includes the JSON data
					div.innerHTML = `
						<h2>Mission Destination</h2>
						<ol>
							<li>Name: ${json[0].name}</li>
							<li>Diameter: ${json[0].diameter}</li>
							<li>Star: ${json[0].star}</li>
							<li>Distance from Earth: ${json[0].distance}</li>
							<li>Number of Moons: ${json[0].moons}</li>
						</ol>
						<img src="${json[0].image}">

					`;
				  });
            });

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
