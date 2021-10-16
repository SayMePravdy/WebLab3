const delay = 10000;

function getCurrentDate(date) {
    let currentDate = date.getDate();
    currentDate = currentDate > 9 ? currentDate : '0' + currentDate;
    let currentMonth = date.getMonth();
    currentMonth = currentMonth > 9 ? currentMonth : '0' + currentMonth;
    return currentDate+ "." + currentMonth + "." + date.getFullYear();
}

function getCurrentTime(date) {
    let currentHours = date.getHours();
    currentHours = currentHours > 9 ? currentHours : '0' + currentHours;
    let currentMinutes = date.getMinutes();
    currentMinutes = currentMinutes > 9 ? currentMinutes : '0' + currentMinutes;
    let currentSeconds = date.getSeconds();
    currentSeconds = currentSeconds > 9 ? currentSeconds : '0' + currentSeconds;
    return currentHours + ":" + currentMinutes + ":" + currentSeconds;
}

function setCurrentDateTime() {
    let date = new Date();
    document.getElementById("left-footer").innerHTML = getCurrentDate(date);
    document.getElementById("right-footer").innerHTML = getCurrentTime(date);
}

setCurrentDateTime();
setInterval(setCurrentDateTime, delay);

