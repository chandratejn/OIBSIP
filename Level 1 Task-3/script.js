// Function to reset output to zero when the input changes
document.getElementById("temperatureInput").addEventListener("input", function() {
    document.getElementById("result").innerHTML = "0";
});

// Function to pre-fill input and trigger conversion on page load
function loadSample() {
    var sampleInput = 25; // Sample input temperature
    var sampleUnit = 'celsius'; // Sample input unit
    document.getElementById('temperatureInput').value = sampleInput;
    document.getElementById('unitSelect').value = sampleUnit;
    convertTemperature(); // Trigger conversion
}

// Function to update system time
function updateTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var timeString = hours + ':' + minutes;
    document.getElementById('time').innerHTML = timeString;
}

// Function to update battery level (dummy function for demonstration)
function updateBatteryLevel() {
    // Dummy function to simulate battery level
    var batteryLevel = Math.floor(Math.random() * 101); // Random number between 0 and 100
    document.querySelector('.battery i').setAttribute('title', 'Battery Level: ' + batteryLevel + '%');
}

// Function to update signal indicator (dummy function for demonstration)
// function updateSignalIndicator() {
//     // Dummy function to simulate signal strength
//     var signalStrength = Math.floor(Math.random() * 5) + 1; // Random number between 1 and 5
//     var signalIcon = '<i class="fas fa-signal"></i>'.repeat(signalStrength); // Repeat the signal icon based on signal strength
//     document.querySelector('.sim-signal').innerHTML = signalIcon;
// }

// Update system time, battery level, and signal indicator every second
setInterval(function() {
    updateTime();
    updateBatteryLevel();
    // updateSignalIndicator();
}, 1000);

// Function to convert temperature
function convertTemperature() {
    var input = document.getElementById("temperatureInput").value.trim(); // Remove leading and trailing whitespace
    var unit = document.getElementById("unitSelect").value;
    var conversionType = document.getElementById("conversionType").value;
    var resultDisplay = document.getElementById("result");

    // Regular expression to match a valid number with optional decimal point
    var numberRegex = /^-?\d+(\.\d+)?$/;

    if (!numberRegex.test(input)) {
        resultDisplay.innerHTML = "Please enter a valid number!";
        return;
    }

   // Convert the validated input to a float
   input = parseFloat(input);

   var convertedTemp;
   switch (conversionType) {
       case "celsiusToFahrenheit":
           if (unit !== "celsius") {
               resultDisplay.innerHTML = "Please choose correct conversion!";
               return;
           }
           convertedTemp = (input * 9/5) + 32;
           break;
       case "fahrenheitToCelsius":
           if (unit !== "fahrenheit") {
               resultDisplay.innerHTML = "Please choose correct conversion!";
               return;
           }
           convertedTemp = (input - 32) * 5/9;
           break;
       case "celsiusToKelvin":
           if (unit !== "celsius") {
               resultDisplay.innerHTML = "Please choose correct conversion!";
               return;
           }
           convertedTemp = input + 273.15;
           break;
       case "kelvinToCelsius":
           if (unit !== "kelvin") {
               resultDisplay.innerHTML = "Please choose correct conversion!";
               return;
           }
           convertedTemp = input - 273.15;
           break;
       case "fahrenheitToKelvin":
           if (unit !== "fahrenheit") {
               resultDisplay.innerHTML = "Please choose correct conversion!";
               return;
           }
           convertedTemp = (input - 32) * 5/9 + 273.15;
           break;
       case "kelvinToFahrenheit":
           if (unit !== "kelvin") {
               resultDisplay.innerHTML = "Please choose correct conversion!";
               return;
           }
           convertedTemp = (input - 273.15) * 9/5 + 32;
           break;
       default:
           resultDisplay.innerHTML = "Invalid conversion type!";
           return;
   }

   resultDisplay.innerHTML = convertedTemp.toFixed(2) + getSymbol(conversionType);
}

// Function to get symbol based on conversion type
function getSymbol(conversionType) {
    switch (conversionType) {
        case "kelvinToFahrenheit":
        case "celsiusToFahrenheit":
            return "F";
        case "kelvinToCelsius":
        case "fahrenheitToCelsius":
            return "°";
        case "celsiusToKelvin":
        case "fahrenheitToKelvin":
            return "K";
        default:
            return "";
    }
}
