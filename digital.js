function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var date = now.getDate();

    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    if (month < 10) month = "0" + month;
    if (date < 10) date = "0" + date;

    var timeString = hours + ":" + minutes + ":" + seconds;
    var dateString = date + "/" + month + "/" + year;
    
    document.getElementById('clock').innerHTML = timeString + " <br> " + dateString;
}

setInterval(updateClock, 1000);
updateClock(); 
