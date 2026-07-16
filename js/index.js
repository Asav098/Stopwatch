const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let ElapsedTime = 0;
let isRunning = false;

function start(){
    if(!isRunning){
        startTime = Date.now() - ElapsedTime;
        timer=setInterval(update,10);
        isRunning = true;
    }
    
}
function stop(){
    if (isRunning === true){
        clearInterval(timer);
        ElapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}
function reset(){
    clearInterval(timer);
 startTime = 0;
 ElapsedTime = 0;
 isRunning = false;
 display.textContent = "00:00:00:00"

}

function update(){
    const currentTime = Date.now();
    ElapsedTime = currentTime - startTime;
    let hours = Math.floor(ElapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(ElapsedTime / (1000 * 60 )% 60 );
    let seconds = Math.floor(ElapsedTime / (1000  )%60);
    let miliseconds = Math.floor(ElapsedTime %1000/10);

    hours = hours.toString().padStart(2,"0");
    minutes = minutes.toString().padStart(2,"0");
    seconds = seconds.toString().padStart(2,"0");
    miliseconds = miliseconds.toString().padStart(2,"0");
    display.textContent = `${hours}:${minutes}:${seconds}:${miliseconds}`;
}