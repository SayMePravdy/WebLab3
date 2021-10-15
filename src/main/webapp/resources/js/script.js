function checkY(valY) {
    const maxY = 5;
    const minY = -5;
    return valY !== "" && isFinite(valY) && valY < maxY && valY > minY;
}


function clickOnChart(canvas, event) {
    let canvasX = document.querySelector('.canvasX');
    let canvasY = document.querySelector('.canvasY');
    let canvasR = document.querySelector('.canvasR');
    let mockButton = document.querySelector('.canvasMockButton');
    let rect = canvas.getBoundingClientRect()
    let width = canvas.width;
    let height = canvas.height;
    canvasX.value = (event.clientX - rect.left - width / 2) / scale;
    canvasY.value = (height / 2 - event.clientY + rect.top) / scale;
    canvasR.value = document.querySelector('.valR').value;
    mockButton.click();
}

function changeR() {
    drawAxis();
    drawAllShoots();
}

function validate() {
    let valY = document.querySelector('.valY').value;
    if (!checkY(valY)) {
        alert('Y должен лежать в интервале от -5 до 5');
    }
}