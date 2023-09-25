// Declare uma variável mouseEvent com um valor “empty”.
var mouseEvent = "empty"
var lastPositionOfX, lastPositionOfY;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    widthOfLine = 1;
// Adicione um comando event listener para mousedown. 
    canvas.addEventListener("mousedowm",myMouseDown);
    function myMouseDown(e)
    {
        //Início da Atividade Adicional
        color = document.getElementById("color").value;
        widthOfLine = document.getElementById("widthOfLine").value;
        //Fim da Atividade Adicional

        mouseEvent = "mouseDown";
    }

// Adicione um comando event listener para mousemove. 
canvas.addEventListener("mousemove",myMouseMove);
    function myMouseMove(e)
    {
        currentPositionOfMouseX = e.clientX - canvas.offsetLeft;
        currentPositionOfMouseY = e.clientY - canvas.offsetTop;

        if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthOfLine;
        ctx.moveTo(lastPositionOfX, lastPositionOfY);
        ctx.lineTo(currentPositionOfMouseX, currentPositionOfMouseY);
        ctx.stroke();
        }

        lastPositionOfX = currentPositionOfMouseX; 
        lastPositionOfY = currentPositionOfMouseY;
    }
// Adicione um comando event listener para mouseup. 
canvas.addEventListener("mouseup",myMouseUp);
    function myMouseUp(e)
    {
        mouseEvent = "mouseUP";
    }

// Adicione um comando event listener para mouseleave. 
canvas.addEventListener("mouseleave",myMouseLeave);
    function myMouseLeave(e)
    {
        mouseEvent = "mouseleave";
    }

var lastPositionOfTouchX, lastPositionOfTouchY;
var width = screen.width;

newWidht =  screen.width - 70; 
newHeight = screen.height - 300;
    if(width < 992)
    {
    document.getElementById("myCanvas").width = newWidht;
    document.getElementById("myCanvas").height = newHeight;
    document.body.style.overflow = "hidden";
    }
    canvas.addEventListener("touchstart", myTouchStart);

function myTouchStart(e) 
{
    console.log("myTouchStart");
  //Atividade Adicional
  color = document.getElementById("color").value;
  widthOfLine = document.getElementById("widthOfLine").value;
  //Fim da Atividade Adicional
         
    lastPositionOfTouchX = e.touches[0].clientX - canvas.offsetLeft;
    lastPositionOfTouchY = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", myTouchMove);

function myTouchMove(e) 
{
    currentPositionOfTouchX = e.touches[0].clientX - canvas.offsetLeft;
    currentPositionOfTouchY = e.touches[0].clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = widthOfLine;
    ctx.moveTo(lastPositionOfTouchX, lastPositionOfTouchY);
    ctx.lineTo(currentPositionOfTouchX, currentPositionOfTouchY);
    ctx.stroke();

    lastPositionOfTouchX = currentPositionOfTouchX; 
    lastPositionOfTouchY = currentPositionOfTouchY;
   
}

//Atividade Adicional
function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
