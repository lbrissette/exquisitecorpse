const drawingBoard = document.getElementById("drawing-space");
 
window.onload = function () {
    //ctx.drawImage(img, 0, 0);
    generateCanvas();
};
 
function generateCanvas() {
    const drawings = JSON.parse(localStorage.getItem("drawings"))
    console.log(drawings)
    console.log(":)")
    drawings.forEach((drawing)=> {
        const img = new Image(100, 100);
        img.src = drawing;
        drawingBoard.appendChild(img);
    })
}