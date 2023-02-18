// Point Five Multiply Area Function 

function pointFiveAreaCalculator(event) {
    const num1String = event.target.parentNode.parentNode.children[2].children[0].value;
    const num2String = event.target.parentNode.parentNode.children[2].children[2].value;
    const num1 = parseFloat(num1String);
    const num2 = parseFloat(num2String);
    if (num1 > 0 && num2 > 0 && typeof num1 === 'number' && typeof num2 === 'number') {
        const areaPrevious = 0.5 * parseFloat(num1) * parseFloat(num2);
        const area = areaPrevious.toFixed(0) + "cm²";
        return area;
    }
    else {
        alert("Please enter a valid Positive number");
    }
}

// Area Function 

function areaFunction(event) {
    const num1String = event.target.parentNode.parentNode.children[2].children[0].value;
    const num2String = event.target.parentNode.parentNode.children[2].children[2].value;
    const num1 = parseFloat(num1String);
    const num2 = parseFloat(num2String);
    if (num1 > 0 && num2 > 0 && typeof num1 === 'number' && typeof num2 === 'number') {
        const areaPrevious = parseFloat(num1) * parseFloat(num2);
        const area = areaPrevious.toFixed(0) + "cm²";
        return area;
    }
    else {
        alert("Please enter a valid Positive number");
    }
}


// Element Shape Name Function 
function elementFunction(event) {
    const element = event.target.parentNode.parentNode.children[0].innerText;
    return element;
}



// Display Data Function 
function displayData(element, area) {
    const areaContainer = document.getElementById('areaContainer');
    const tr = document.createElement('tr');
    tr.innerHTML = `
<td>${serial}</td>
<td>${element}</td>
<td>${area}</td>
<button class="bg-blue-500 text-center text-sm mt-3 px-2 py-1 text-white rounded-md">ConvertToMeter</button>`;
    areaContainer.appendChild(tr);
}

