const canvas = document.getElementById('drawing-board');
const toolbar = document.getElementById('toolbar');
const ctx = canvas.getContext('2d');
 
 
const canvasOffsetX = canvas.offsetLeft;
const canvasOffsetY = canvas.offsetTop;
 
canvas.width = window.innerWidth * .75;
canvas.height = window.innerHeight * .55;
// a comment!
let isPainting = false;
let lineWidth = 5;
let startX;
let startY;
 
let counter = +localStorage.getItem("counter");
 
//clear the canvas
toolbar.addEventListener('click', e => {
    if (e.target.id === 'clear') {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
});
 
//changing the
toolbar.addEventListener('change', e => {
    if(e.target.id === 'stroke') {
        ctx.strokeStyle = e.target.value;
    }
 
    if(e.target.id === 'lineWidth') {
        lineWidth = e.target.value;
    }
    
});
 
// drawing on the screen
const draw = (e) => {
    if(!isPainting) {
        return;
    }
 
    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';
 
    //this accounts for the title at the top of the screen and the toolbar on the side
    ctx.lineTo(e.clientX - canvasOffsetX, e.clientY - canvasOffsetY);
    ctx.stroke();
}
 
 
canvas.addEventListener('mousedown', (e) => {
    isPainting = true;
    startX = e.clientX;
    startY = e.clientY;
});
 
canvas.addEventListener('mouseup', e => {
    isPainting = false;
    ctx.stroke();
    ctx.beginPath();
});
 
canvas.addEventListener('mousemove', draw);
 
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
 
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
 
        display.textContent = minutes + ":" + seconds;
 
        if (--timer < 0) {
            storeCanvas();
            timer = duration;
            if (counter >= 3) {
                window.location.href = "finalImage.html"
            }
            else {
                window.location.href = "switchPlayer.html"
            }
        }
    }, 1000);
}
 
function storeCanvas() {
    var canvasString = canvas.toDataURL()
    const drawingsStrings = localStorage.getItem("drawings")
    if(!drawingsStrings) {
        localStorage.setItem("drawings", JSON.stringify([canvasString]))
    } else {
        const drawings = JSON.parse(drawingsStrings)
        drawings.push(canvasString)
        localStorage.setItem("drawings", JSON.stringify(drawings))
    }
}

window.onload = function () {
    display = document.querySelector('#time');
    counter = counter + 1;
    localStorage.setItem("counter", counter);
    startTimer(sessionStorage.getItem("mytime"), display);
    if(Number(counter) == 1) {
        document.getElementById("play").innerHTML = "<h1>Player 1, draw the head!</h1>";
        }
        else if(Number(counter) == 2) {
        document.getElementById("play").innerHTML = "<h1>Player 2, draw the body!</h1>";
        }
        else {
        document.getElementById("play").innerHTML = "<h1>Player 3, draw the legs!</h1>";
        }
};

