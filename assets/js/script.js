// grab everything we need
const start_button  = document.querySelector('[data-action="start"]');
const stop_button   = document.querySelector('[data-action="stop"]');
const reset_button  = document.querySelector('[data-action="reset"]');
const minutes       = document.querySelector('.minutes');
const seconds       = document.querySelector('.seconds');
let timerTime       = 0;
let isRunning       = false;
let interval;



// define all function w'll nedd
function startTimer(){
    if(isRunning) return ;

    isRunning = true;
    interval = setInterval(incrementTimer, 1000);
}

function stopTimer(){
    if(!isRunning) return;
    
    isRunning = false;
    clearInterval(interval);

}

function resetTimer(){
    stopTimer();

    timerTime = 0;
    minutes.innerHTML = '00';
    seconds.innerHTML = '00';

}

function incrementTimer(){
    timerTime++;

    let number_of_minutes = Math.floor(timerTime / 60); 
    let number_of_second  = timerTime % 60;
    console.log(number_of_minutes);
    minutes.innerHTML = pad(number_of_minutes);
    seconds.innerHTML = pad(number_of_second);
}

function pad(number){
    return (number < 10) ? '0' + number : number;
}


// add event listeners
start_button.onclick = e => startTimer();
stop_button.onclick  = e => stopTimer();
reset_button.onclick = e => resetTimer();