const scale = 25;
const dash = 5;


function drawAllShoots() {
    let table_rows = document.querySelector("#history_table").tBodies[0].rows;
    let cnt = table_rows.length;
    let valR = document.querySelector('.valR').value;
    let sended = [];
    for (let i = 0; i < cnt; i++) {
        let x = parseFloat(table_rows[i].cells[0].innerText.replace(",", "."));
        let y = parseFloat(table_rows[i].cells[1].innerText.replace(",", "."));
        let r = parseInt(table_rows[i].cells[2].innerText.replace(",", "."));
        let isHit = table_rows[i].cells[3].innerText;
        let coordinates = mapCoordinates(x, y);
        if (!findShoot(sended, x, y) && isFinite(x) && isFinite(y)) {
            if (r == valR) {
                drawShoot(coordinates.x, coordinates.y, isHit);
            } else {
                let canvasX = document.querySelector('.canvasX');
                let canvasY = document.querySelector('.canvasY');
                let canvasR = document.querySelector('.canvasR');
                let mockButton = document.querySelector('.canvasMockButton');
                canvasX.value = x;
                canvasY.value = y;
                canvasR.value = document.querySelector('.valR').value;
                mockButton.click();
            }
        }
        sended.push(new Coordinates(x, y));
    }
}

function findShoot(shoots, x, y) {
    let check = false;
    shoots.forEach(function (item, index, array) {
        if (item.x == x && item.y == y) {
            console.log("find");
            check = true;
        }
    });
    return check;
}

function drawLastShoot() {
    let table_rows = document.querySelector("#history_table").tBodies[0].rows;
    let x = parseFloat(table_rows[0].cells[0].innerText.replace(",", "."));
    let y = parseFloat(table_rows[0].cells[1].innerText.replace(",", "."));
    let isHit = table_rows[0].cells[3].innerText;
    let coordinates = mapCoordinates(x, y);
    drawShoot(coordinates.x, coordinates.y, isHit);
}

function drawAreas() {
    // let valR = document.getElementById("r_arg").value * scale;
    let valR = document.querySelector('.valR').value * scale;
    let canvas = document.getElementById('chart');
    let width = canvas.width;
    let height = canvas.height;
    let chart = canvas.getContext('2d');

    chart.fillStyle = 'blue';
    chart.globalAlpha = 0.6;

    //draw triangle
    chart.beginPath();
    chart.moveTo(width / 2, height / 2 + valR);
    chart.lineTo((width + valR) / 2, height / 2);
    chart.lineTo(width / 2, height / 2);
    chart.fill();

    //draw rectangle
    chart.beginPath();
    chart.fillRect(width / 2, height / 2 - valR, valR / 2, valR);

    //draw arc
    chart.beginPath();
    chart.fillStyle = 'blue';
    chart.strokeStyle = 'blue';
    chart.globalAlpha = 0.6;
    chart.arc(width / 2, height / 2, valR / 2, Math.PI, Math.PI * 1.5);
    chart.lineTo(width / 2, height / 2)
    chart.fill();
    chart.stroke();

}

function drawAxis() {
    let canvas = document.getElementById('chart');
    let width = canvas.width;
    let height = canvas.height;
    let chart = canvas.getContext('2d');


    chart.strokeStyle = 'black';
    chart.fillStyle = 'black';
    chart.globalAlpha = 1.0;
    chart.clearRect(0, 0, width, height);

    //draw axis
    chart.beginPath();
    chart.moveTo(width / 2, 0);
    chart.lineTo(width / 2, height);
    chart.stroke();
    chart.beginPath();
    chart.moveTo(0, height / 2);
    chart.lineTo(width, height / 2);
    chart.stroke();

    chart.font = '9px Arial';
    //draw x-dash
    for (let i = -5; i <= 5; i++) {
        chart.beginPath();
        let x = width / 2 + scale * i;
        chart.moveTo(x, height / 2 + dash);
        chart.lineTo(x, height / 2 - dash);
        if (i !== 0) {
            chart.fillText(i.toString(), x - dash / 2, height / 2 + 3 * dash);
        }
        chart.stroke();
    }

    //draw y-dash
    for (let i = -5; i <= 5; i++) {
        chart.beginPath();
        let y = height / 2 + scale * i;
        chart.moveTo(width / 2 + dash, y);
        chart.lineTo(width / 2 - dash, y);
        if (i !== 0) {
            chart.fillText(i.toString(), width / 2 + dash, y + dash);
        }
        chart.stroke();
    }
    drawAreas();
}

function drawShoot(x, y, isHit) {
    let canvas = document.getElementById('chart');
    let chart = canvas.getContext('2d');
    let color;
    if (isHit === 'Да') {
        color = 'green';
    } else {
        color = 'red';
    }
    chart.beginPath();
    let rShoot = document.querySelector('.valR').value * 1.2 + 0.8;
    chart.arc(x, y, rShoot, 0, Math.PI * 2);
    chart.fillStyle = color;
    chart.strokeStyle = color;
    chart.globalAlpha = 0.45;
    chart.fill();
    chart.stroke();
}

function canvasInit() {
    let canvas = document.getElementById('chart');
    canvas.addEventListener('mousedown', event => clickOnChart(canvas, event));
    drawAxis();
}

function mapCoordinates(x, y) {
    let canvas = document.getElementById('chart');
    let width = canvas.width;
    let height = canvas.height;
    return new Coordinates(width / 2 + x * scale, height / 2 - y * scale);
}

class Coordinates {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}