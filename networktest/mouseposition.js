// Input

window.onmousemove = recieveInput;
var mousePosition = {x:0,y:0}

function recieveInput (event)
{
    mousePosition.x = event.clientX;
    mousePosition.y = event.clientY;
}
/*
function displayInput ()
{
    //mover.style.left = mousePosition.x;
    //mover.style.top = mousePosition.y;
    mover.setAttributeNS(null,"cx",mousePosition.x);
    mover.setAttributeNS(null,"cy",mousePosition.y);
    requestAnimationFrame(displayInput);
}
*/
// Create SVG

let svgNS = "http://www.w3.org/2000/svg";
const svg = document.createElementNS(svgNS, "svg");
svg.style.position = "absolute"; svg.style.left = 5; svg.style.top = 5;
document.body.appendChild(svg);
resizeSVG();
function resizeSVG () {
    svg.style.width = window.innerWidth-10;
    svg.style.height = window.innerHeight-10;
}
window.onresize = resizeSVG;

// Render


var mover;




function createCircle()
{
    var myCircle = document.createElementNS(svgNS,"circle"); //to create a circle. for rectangle use "rectangle"
    myCircle.setAttributeNS(null,"id","mycircle");
    myCircle.setAttributeNS(null,"cx",100);
    myCircle.setAttributeNS(null,"cy",100);
    myCircle.setAttributeNS(null,"r",50);
    myCircle.setAttributeNS(null,"fill","black");
    myCircle.setAttributeNS(null,"stroke","none");
    mover = myCircle;
    svg.appendChild(myCircle);
}
createCircle();displayInput();

function displayInput ()
    {
        
        reboline.setAttribute('x1', previousPosition.x);
        reboline.setAttribute('y1', previousPosition.y);
        
        reboline.setAttribute('x2', mousePosition.x);
        reboline.setAttribute('y2', mousePosition.y);
        previousPosition.x = mousePosition.x;
        previousPosition.y = mousePosition.y;
        //mover.style.left = mousePosition.x;
        //mover.style.top = mousePosition.y;
        rebo.setAttribute('cx', mousePosition.x);
        rebo.setAttribute('cy', mousePosition.y);

        requestAnimationFrame(displayInput);
    }displayInput();