const canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d'),
    color = document.getElementById('color');

const angle = (degrees = 360) => (Math.PI / 180) * degrees;

let tick = 0;
const animation = () => {
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);
    ctx.fillStyle = 'blue';
    ctx.fillRect(tick, tick, 50, 50);
    tick++;
    if (tick < 150){
        requestAnimationFrame(animation);
    } else {
        reverse();
    }
};
//animation();
const reverse = () => {
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);
    ctx.fillStyle = 'blue';
    ctx.fillRect(tick, tick, 50, 50);
    tick--;
    if (tick > 0){
        requestAnimationFrame(reverse);
    } else {
        animation();
    }
};
color.addEventListener('input', (event) => {
    ctx.strokeStyle = color.value;
});

canvas.addEventListener('mousemove', (event) => {
    const x = event.offsetX,
    y = event.offsetY,
    mx = event.movementX,
    my = event.movementY;

    if (event.buttons > 0){
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x-mx, y-my);
        ctx.stroke();
        ctx.closePath();
    }
});


// //const gradient = ctx.createLinearGradient(20, 20, 120, 120);
// const gradient = ctx.createRadialGradient(70, 70, 0, 70, 70, 70); //координаты, координаты, радиус и еще раз
// gradient.addColorStop(0, 'hsl(250, 70%, 70%)'); //0 - начало, 1 - конец
// gradient.addColorStop(1, 'hsl(0, 70%, 70%)');
// ctx.fillStyle = gradient;
// //ctx.fillStyle = '#f555'; //окрашивание (любой формат цвета, понятный css)
// ctx.fillRect(20, 20, 100, 100); //окрашенный квадрат
// ctx.strokeStyle = 'red';
// ctx.strokeRect(120, 20, 100, 100); //рамка квадрата
// ctx.clearRect(50, 50, 40, 40);

// ctx.beginPath();
// ctx.moveTo(150,0);
// ctx.lineTo(175, 125);
// ctx.lineTo(200, 50);
// ctx.lineWidth = '5';
// ctx.strokeStyle = '#008800';
// ctx.moveTo(150, 150);
// ctx.lineTo(20, 20);
// ctx.moveTo(175, 150); //150+25 (радиус круга)
// ctx.strokeStyle = 'yellow';
// ctx.arc(150, 150, 25, 0, Math.PI * 1.5, false);

// ctx.moveTo(225, 20);
// ctx.arc(200, 20, 25, 0, angle(), false);
// ctx.moveTo(50, 90);
// ctx.arcTo(5, 10, 80, 90, 10);
// ctx.lineTo(80,90);
// ctx.moveTo(100, 100);
// ctx.bezierCurveTo( 100, 200, 200, 200, 200, 100);
// ctx.stroke();

// ctx.shadowOffsetX = 3;
// ctx.shadowOffsetY = 3;
// ctx.shadowBlur = 3;
// ctx.shadowColor = 'violet';
// ctx.font = '30px Sans-serif';
// ctx.fillStyle = 'blue';
// ctx.fillText('JS', 50, 50, 200);

// ctx.shadowOffsetX = 3;
// ctx.shadowOffsetY = 3;
// ctx.shadowBlur = 3;
// ctx.shadowColor = 'grey';
// ctx.font = '20px Sans-serif';
// ctx.fillStyle = 'blue';
// ctx.fillText('Курс во время чумы', 50, 100, 200);

// ctx.shadowOffsetX = 0;
// ctx.shadowOffsetY = 0;
// ctx.shadowBlur = 1;
// ctx.shadowColor = 'black';
// ctx.font = '15px Sans-serif';
// ctx.fillStyle = 'yellow';
// ctx.rotate(angle(15));
// ctx.fillText('Спешите!', 120, 0, 200);
