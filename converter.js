/*In the HTML, have one input field where someone can enter in a temperature.
Create a radio button group where Celsius or Fahrenheit can be selected as the scale that the number should be converted to.
Create a block level element that will hold the text of the converted temperature.
Create a button that, when clicked, displays the converted temperature.
Create another button that, when clicked, clears any text in the input field.
Add an event handler to the input field that checks if the user pressed the enter key, and if that happens, perform the conversion.
If the temperature is greater than 90F/32C the color of the converted temperature should be red.
If the temperature is less than 32F/0C the color of the converted temperature should be blue.
For any other temperature, the color should be green.*/

var execute = document.getElementById("userSubmit");
var clearButton = document.getElementById("clearBut");
var enterText = document.getElementById("userInput");
var output = document.getElementById("result");
document.addEventListener("keypress", determineConverter);
execute.addEventListener("click", determineConverter);
clearButton.addEventListener("click", clear);

//(x - 32) / 1.8 = celsius temp
function toCelsius () {
	var enterFahr = enterText.value;
	var fahrToCels = (((enterFahr - 32)*5)/9);
	output.value = fahrToCels;
	if(fahrToCels > 32){
	output.style.color = "red";
    } else if (fahrToCels <= 0) {
    	output.style.color = "blue";
    } else {
    	output.style.color = "green";
    }
}

//x * 1.8 + 32 = fahrenheit temp
function toFahrenheit () {
	var enterCels = enterText.value;
	var celsToFahr = ((enterCels * 9)/5)+32;
	output.value = celsToFahr;
	if(celsToFahr < 32){
		output.style.color = "blue";
	} else if (celsToFahr <= 0) {
    	output.style.color = "blue";
    } else {
    	output.style.color = "green";
    }
	
}



function determineConverter (clickEvent) {
	if (document.getElementById("Fahr").checked) {
		toFahrenheit();
	} else if (document.getElementById("Cels").checked) {
		toCelsius();
	}
}

function enterKeyPressed(keypress){
 if (keypress.which === 13) {
   determineConverter();
 }
}




function clear(){
 
 	document.getElementById("userInput").value = "";
 	document.getElementById("result").value = "";
 	//console.log(clearButton, clicked);
 }
 //clear()





// Get a reference to the button element in the DOM
//var button = document.getElementById("converter");

// This function should determine which conversion should
// happen based on which radio button is selected.
//function determineConverter (clickEvent) {
 // console.log("event", clickEvent);


// Assign a function to be executed when the button is clicked
//button.addEventListener("click", determineConverter);