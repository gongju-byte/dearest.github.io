const canvas = document.getElementById('graphCanvas');
const ctx = canvas.getContext('2d');

const minX = -2.5;
const maxX = 2.5;
const step = 0.01;
const scaleX = 40;
const scaleY = 30;
let a = 0;

function f(x, a) {
    if (x ** 2 <= 5) {
        return Math.pow(Math.abs(x), 2/3) + Math.sqrt(5 - Math.pow(x, 2)) * Math.sin(a * Math.PI * x);
    }
    return NaN;
}

function drawGraph(a) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.moveTo(canvas.width / 2 + minX * scaleX, canvas.height / 2 - f(minX, a) * scaleY);

    for (let x = minX; x <= maxX; x += step) {
        const y = f(x, a);
        if (!isNaN(y)) {
            ctx.lineTo(canvas.width / 2 + x * scaleX, canvas.height / 2 - y * scaleY);
        }
    }

    ctx.strokeStyle = 'red';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.closePath();
}

let direction = 1;
let speed = 0.05;
let minA = -10;
let maxA = 10;

function animateA() {
    a += speed * direction;

    if (a >= maxA || a <= minA) {
        direction *= -1;
    }

    updateGraph(a);
    requestAnimationFrame(animateA);
}

function updateGraph(a) {;
    drawGraph(a);
}

animateA();