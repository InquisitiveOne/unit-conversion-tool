/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const meter = 3.281 // feet
const feet = 1/3.281 // meter

const liter = 0.264 //gallon
const gallon = 1 / 0.264 // liter
const kilogram = 2.204 //pound 
const pound = 1 / 2.204 // kilogram

// Get DOM for:
// input: "number-input-box", pass into a const variable
const numInput = document.getElementById("number-input-box")
// button: "convert-num-btn", pass into a const variable
const convertBtn = document.getElementById("convert-num-btn")
// result1: "length-conversion", pass into a const variable
const convertLength = document.getElementById("length-conversion")
// result2: "volume-conversion", pass into a const variable
const convertVolume = document.getElementById("volume-conversion")
// result3: "mass-conversion", pass into a const variable
const convertMass = document.getElementById("mass-conversion")

// User story: 
// When user types in a number and presses convert button, show result for length, volume and mass

// add eventlistener to button with "click"
// create a function for eventlistener that takes user input as a parameter and converts it into length, volume, mass
// Length: store results in feet and meters variables
// return the length results in a string "[input] meters = [result] feet | [input] feet = [result] meters"
// user innerHTML method to pass the result into the DOM 

convertBtn.addEventListener("click", function() {
    let feetResult = numInput * feet 
    console.log(feetResult)
})


convertBtn.addEventListener("click", function() {
    // Convert numInput value to a number
    const userInput = parseFloat(numInput.value);

    let feetResult = userInput * feet;
    
    // Update the result in the DOM
    convertLength.innerHTML = `${userInput} meters = ${feetResult.toFixed(2)} feet | ${userInput} feet = ${userInput / feet} meters`;
    
});