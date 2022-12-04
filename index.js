let btn = document.getElementById("btnid");
let displayContainer = document.getElementById("displaycontainer");
let lengthConversion = document.getElementById("lengthConversion")

let volumeConversion = document.getElementById("volumeConversion")

let massConversion = document.getElementById("massConversion")

const meterToFeet = 3.281
const literToGallon = 0.264
const kiloToPound = 2.204

btn.addEventListener("click", function() {

    let baseValue = displayContainer.value
    lengthConversion.textContent = `${baseValue} meter = ${baseValue * meterToFeet} feet`;

     baseValue = displayContainer.value
     volumeConversion.textContent = `${baseValue} liters = ${baseValue * literToGallon} galons`

     baseValue = displayContainer.value
     massConversion.textContent = `${baseValue} kilo = ${baseValue * kiloToPound} pounds`

   

})


