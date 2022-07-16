function clock() {
const fullDate = new Date();
let hours = fullDate.getHours();
let min = fullDate.getMinutes();
let sec = fullDate.getSeconds();
if(hours < 10){
    hours = "0" + hours;
}else if(minute<10){
    min = "0" + min;

}else if(second <10 ){
    sec = "0" + sec;
}
document.getElementById('hour:').innerHTML = hours;
document.getElementById('minutes:').innerHTML = min;
document.getElementById('seconds').innerHTML = sec;
}

setInterval(clock, 100);

