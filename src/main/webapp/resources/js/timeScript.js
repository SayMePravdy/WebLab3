const delay = 10000;

function getCurrentDate(date) {
    return date.getDate() + "." + date.getMonth() + "." + date.getFullYear();
}

function getCurrentTime(date) {
    return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}

function setCurrentDateTime() {
    let date = new Date();
    document.getElementById("left-footer").innerHTML = getCurrentDate(date);
    document.getElementById("right-footer").innerHTML = getCurrentTime(date);
}

setCurrentDateTime();
setInterval(setCurrentDateTime, delay);

