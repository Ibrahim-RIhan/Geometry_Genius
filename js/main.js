const buttonTriangle = document.getElementById('btn-triangle').addEventListener('click', function (event) {
    const element = elementFunction(event)
    const area = pointFiveAreaCalculator(event)
    displayData(element, area);
})

// const triangleArea = pointFiveAreaCalculator(event);
// console.log(triangleArea);