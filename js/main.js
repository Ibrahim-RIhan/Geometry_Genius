document.getElementById('btn-triangle').addEventListener('click', function(event) {
//     const num1 = event.target.parentNode.parentNode.children[2].children[0].value;
//     const num2 = event.target.parentNode.parentNode.children[2].children[2].value;
//     const areaPrevious =  0.5 * parseFloat(num1) * parseFloat(num2);
// const area = areaPrevious.toFixed(2);
// return area;
const triangleArea = pointFiveAreaCalculator(event);
console.log(triangleArea);

})