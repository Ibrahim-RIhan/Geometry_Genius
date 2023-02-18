// Triangle Area 
document.getElementById('btn-triangle').addEventListener('click', function (event) {
    const area = pointFiveAreaCalculator(event);
    if (area === undefined) {
    }
    else {
        const element = elementFunction(event);
        displayData(element, area);
    }
})

// Rectangle Area 
document.getElementById('btn-rectangle').addEventListener('click', function (event) {
    const area = areaFunction(event);
    if (area === undefined) {
    }
    else {
        const element = elementFunction(event);
        displayData(element, area);
    }
});

// Parallelogram Area 
document.getElementById('btn-parallelogram').addEventListener('click', function (event) {
    const area = areaFunction(event);
    if (area === undefined) {
    }
    else {
        const element = elementFunction(event);
        displayData(element, area);
    }
});

// Rhombus Area 
document.getElementById('btn-rhombus').addEventListener('click', function (event) {
    const area = pointFiveAreaCalculator(event);
    if (area === undefined) {
    }
    else{
        const element = elementFunction(event);
        displayData(element, area);
    }
   
});
// Pentagon Area 
document.getElementById('btn-pentagon').addEventListener('click', function (event) {
    
    
    const area = pointFiveAreaCalculator(event);
    
})
//  Ellipse Area 

document.getElementById('btn-ellipse').addEventListener('click', function (event) {
    const num1 = event.target.parentNode.parentNode.children[2].children[0].value;
    const num2 = event.target.parentNode.parentNode.children[2].children[2].value;
    if (num1, num2 >= 0 && typeof num1, num2 === 'number') {
        const areaPrevious = 3.14 * parseFloat(num1) * parseFloat(num2);
        const area = areaPrevious.toFixed(0) + "m²";
        const element = elementFunction(event);
        displayData(element, area);
    }
    else {
        alert("Please enter a valid Positive number");
    }
}

)
