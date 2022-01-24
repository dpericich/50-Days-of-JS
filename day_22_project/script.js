const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const decrementButton = document.getElementById('decrease');
const incrementButton = document.getElementById('increase');
const sizeDisplay = document.getElementById('size');
const colorPicker = document.getElementById('color');
const clearButton = document.getElementById('clear');

let isPressed = false;
let size = 20;
let color = 'black';
let x;
let y;

canvas.addEventListener('mousedown', (e) => {
    isPressed = true;

    x = e.offsetX;
    y = e.offsetY;
})

canvas.addEventListener('mouseup', (e) => {
    isPressed = false;

    x = undefined;
    y = undefined;
})

canvas.addEventListener('mousemove', (e) => {
    if (isPressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;
        drawCircle(x2, y2);
        drawLine(x, y, x2, y2)
        x = x2;
        y = y2;
    }
})

decrementButton.addEventListener('click', () => {
    if (size > 5) {
        size -= 5;
        sizeDisplay.innerText = size;
    }
})

incrementButton.addEventListener('click', () => {
    if (size < 50) {
        size += 5;
        sizeDisplay.innerText = size;
    }
})

colorPicker.addEventListener('change', (e) => {
    color = e.target.value;
})

clearButton.addEventListener('click', () => {
    ctx.clearRect(0, 0, 800, 400);
})

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
}

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}