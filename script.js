let [hours, minutes, seconds] = [0,0,0];
let displayTime = document.getElementsByClassName("display-time")[0];
let timer = null;
let image = document.getElementsByClassName("play-pause")[0];

function stopWatch(){
    seconds++;
    if(seconds == 60){
        seconds = 0;
        minutes++;
        if(minutes == 60){
            minutes = 0;
            hours++;
        }
    }

    let h = hours < 10? "0" + hours: hours;
    let m = minutes < 10? "0" + minutes: minutes;
    let s = seconds < 10? "0" + seconds: seconds;

    displayTime.innerHTML = `${h}:${m}:${s}`
}

function watchStart(){
    if(timer!== null){
        clearInterval(timer);
        image.src = "Images/pause.png";
    }
    timer = setInterval(stopWatch,1000);
    image.src = "Images/pause.png";
}

function watchStop(){
    clearInterval(timer);
    image.src = "Images/play.png";
}
function watchReset(){
    image.src = "Images/play.png";
    clearInterval(timer);
    [hours, minutes, seconds] = [0,0,0];
    displayTime.innerHTML = "00:00:00";
}