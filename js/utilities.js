function pointFiveAreaCalculator(event) {
    const num1 = event.target.parentNode.parentNode.children[2].children[0].value;
    const num2 = event.target.parentNode.parentNode.children[2].children[2].value;
    const areaPrevious = 0.5 * parseFloat(num1) * parseFloat(num2);
    const area = areaPrevious.toFixed(2);
    return area;
}
// Element Function 
function elementFunction(event) {
    const element = event.target.parentNode.parentNode.children[0].innerText;
    return element;
}
function displayData(element, area) {
    const areaContainer = document.getElementById('areaContainer');
    const tr = document.createElement('tr');
    tr.innerHTML = `
<td>${element}</td>
<td>${area}</td>
<button class="bg-blue-500 text-center mt-3 px-2 py-1 text-white rounded-md">ConvertToMeter</button>`;
    areaContainer.appendChild(tr);
}