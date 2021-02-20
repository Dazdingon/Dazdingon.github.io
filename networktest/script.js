//const svg = document.createElement('svg');
//const svgNS = svg.namespaceURI;

const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
document.body.appendChild(svg);
svg.width = 200;
svg.height = 200;

let kfsd = "http://www.w3.org/2000/svg";//svg.namespaceURI
let newRect = document.createElementNS(kfsd, "rect");
newRect.setAttribute("width", 100);
newRect.setAttribute("hieght", 100);

newRect.setAttribute("x", "150");
newRect.setAttribute("y", "150");
newRect.setAttribute("width", "100");
newRect.setAttribute("height", "100");
newRect.setAttribute("fill", "#5cceee");
svg.appendChild(newRect);

function createCircle()
{
    var myCircle = document.createElementNS(svgNS,"circle"); //to create a circle. for rectangle use "rectangle"
    myCircle.setAttributeNS(null,"id","mycircle");
    myCircle.setAttributeNS(null,"cx",100);
    myCircle.setAttributeNS(null,"cy",100);
    myCircle.setAttributeNS(null,"r",50);
    myCircle.setAttributeNS(null,"fill","black");
    myCircle.setAttributeNS(null,"stroke","none");

    document.getElementById("mySVG").appendChild(myCircle);
} 

//

window.onmousemove = recieveInput;
var mousePosition = {x:0,y:0}

function recieveInput (event)
{
    mousePosition.x = event.clientX;
    mousePosition.y = event.clientY;
}

function displayInput ()
{
    mover.style.left = mousePosition.x;
    mover.style.top = mousePosition.y;
    requestAnimationFrame(displayInput);
}displayInput();