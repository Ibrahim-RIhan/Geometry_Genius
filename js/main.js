let serial = 0;
// Triangle Area 
document.getElementById('btn-triangle').addEventListener('click', function (event) {
    const area = pointFiveAreaCalculator(event);
    if (area === undefined) {
    }
    else {
        const element = elementFunction(event);
        serial = serial + 1;
        displayData(element, area, serial);
    }
})

// Rectangle Area 
document.getElementById('btn-rectangle').addEventListener('click', function (event) {
    const area = areaFunction(event);
    if (area === undefined) {
    }
    else {
        const element = elementFunction(event);
        serial = serial + 1;
        displayData(element, area, serial);

    }
});

// Parallelogram Area 
document.getElementById('btn-parallelogram').addEventListener('click', function (event) {
    const area = areaFunction(event);
    if (area === undefined) {
    }
    else {
        const element = elementFunction(event);
        serial = serial + 1;
        displayData(element, area, serial);

    }
});

// Rhombus Area 
document.getElementById('btn-rhombus').addEventListener('click', function (event) {
    const area = pointFiveAreaCalculator(event);
    if (area === undefined) {
    }
    else {
        const element = elementFunction(event);
        serial = serial + 1;
        displayData(element, area, serial);

    }

});
// Pentagon Area 
document.getElementById('btn-pentagon').addEventListener('click', function (event) {
    const area = pointFiveAreaCalculator(event);
    if (area === undefined) {
    }
    else {
        const element = elementFunction(event);
        serial = serial + 1;
        displayData(element, area, serial);
    }

});
//  Ellipse Area 

document.getElementById('btn-ellipse').addEventListener('click', function (event) {
    const num1String = event.target.parentNode.parentNode.children[2].children[0].value;
    const num2String = event.target.parentNode.parentNode.children[2].children[2].value;
    const num1 = parseFloat(num1String);
    const num2 = parseFloat(num2String);
    if (num1 > 0 && num2 > 0 && typeof num1 === 'number' && typeof num2 === 'number') {
        const areaPrevious = 3.14 * parseFloat(num1) * parseFloat(num2);
        const area = areaPrevious.toFixed(0) + "cm²";
        if (area === undefined) {
        }
        else {
            const element = elementFunction(event);
            serial = serial + 1;
            displayData(element, area, serial);

        }
    }
    else {
        alert("Please enter a valid Positive number");
    }
}

)
