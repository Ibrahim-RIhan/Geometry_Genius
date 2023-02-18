// Random Color On Hover



function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
        color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
}

// Card 1 Hover 


document.getElementById('card1').addEventListener('mouseover', function () {
    const card1 = document.getElementById('card1');
    card1.style.backgroundColor = randomColor();
this.onmouseleave = function () {
card1.style.backgroundColor = 'white';
}}
)

// Card 2 Hover 
document.getElementById('card2').addEventListener('mouseover', function () {
    const card1 = document.getElementById('card2');
    card1.style.backgroundColor = randomColor();
this.onmouseleave = function () {
card1.style.backgroundColor = 'white';
}}
)

// Card 3 Hover

document.getElementById('card3').addEventListener('mouseover', function () {
    const card1 = document.getElementById('card3');
    card1.style.backgroundColor = randomColor();
this.onmouseleave = function () {
card1.style.backgroundColor = 'white';
}}
)

// Card 4 Hover

document.getElementById('card4').addEventListener('mouseover', function () {
    const card1 = document.getElementById('card4');
    card1.style.backgroundColor = randomColor();
this.onmouseleave = function () {
card1.style.backgroundColor = 'white';
}}
)

// Card 5 Hover

document.getElementById('card5').addEventListener('mouseover', function () {
    const card1 = document.getElementById('card5');
    card1.style.backgroundColor = randomColor();
this.onmouseleave = function () {
card1.style.backgroundColor = 'white';
}}
)

// Card 6 Hover 

document.getElementById('card6').addEventListener('mouseover', function () {
    const card1 = document.getElementById('card6');
    card1.style.backgroundColor = randomColor();
this.onmouseleave = function () {
card1.style.backgroundColor = 'white';
}}
)
