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
    const userInput = parseFloat(numInput.value)
    // Units
        /*
        1 meter = 3.281 feet
        1 liter = 0.264 gallon
        1 kilogram = 2.204 pound
        */
    const meter = userInput / 3.281
    const feet = userInput * 3.281
    const gallon = userInput * 0.264
    const liter = userInput / 0.264
    const pound = userInput * 2.204
    const kilogram = userInput / 2.204
    
    // Update the result in the DOM
    // 20 meters = 65.616 feet | 20 feet = 6.096 meters
    convertLength.innerHTML = `${userInput} meters = ${feet.toFixed(2)} feet | ${userInput} feet = ${meter.toFixed(2)} meters`
    
    // `20 liters = 5.284 gallons | 20 gallons = 75.708 liters`
    convertVolume.innerHTML = `${userInput} liters = ${gallon.toFixed(2)} gallons | ${userInput} gallons = ${liter.toFixed(2)} liters`
    
    // 20 kilos = 44.092 pounds | 20 pounds = 9.072 kilos
    convertMass.innerHTML = `${userInput} kilos = ${pound.toFixed(2)} pounds | ${userInput} pounds = ${kilogram.toFixed(2)} kilos`
})