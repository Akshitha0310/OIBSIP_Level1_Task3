function convertTemperature() {
    const temperatureInput = document.getElementById("temperature");
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
    const resultElement = document.getElementById("result");


    if (fromUnit === toUnit) {
        resultElement.innerText = "Please select different units.";
        return;
    }

    const temperature = parseFloat(temperatureInput.value);

    if (isNaN(temperature)) {
        resultElement.innerText = "Please enter a valid temperature.";
        return;
    }

    let convertedTemperature;

    if (fromUnit === "celsius") {
        if (toUnit === "fahrenheit") {
            convertedTemperature = (temperature * 9/5) + 32;
        } else if (toUnit === "kelvin") {
            convertedTemperature = temperature + 273.15;
        }
    } else if (fromUnit === "fahrenheit") {
        if (toUnit === "celsius") {
            convertedTemperature = (temperature - 32) * 5/9;
        } else if (toUnit === "kelvin") {
            convertedTemperature = (temperature - 32) * 5/9 + 273.15;
        }
    } else if (fromUnit === "kelvin") {
        if (toUnit === "celsius") {
            convertedTemperature = temperature - 273.15;
        } else if (toUnit === "fahrenheit") {
            convertedTemperature = (temperature - 273.15) * 9/5 + 32;
        }
    }

    resultElement.innerText = `${temperature} ${fromUnit} is ${convertedTemperature.toFixed(2)} ${toUnit}`;
}
function resetFields() {
    document.getElementById("temperature").value = "";
    document.getElementById("fromUnit").value = "celsius";
    document.getElementById("toUnit").value = "celsius";
    document.getElementById("result").innerText = "";
}
