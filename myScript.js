var ctx = document.querySelector('canvas').getContext('2d');

var fpsout = document.querySelector('#fps');
var lastUpdate = new Date, fps = 30;

setInterval(drawFrame, 1000 / 60);
setInterval(displayFrameCount,1000);
window.addEventListener('resize', drawFrame, false);

function drawFrame() {
	var now = new Date;
	var dt = (now - lastUpdate) / 1000;
	if (dt == 0 || isNaN(dt)) return;
		
	ctx.save();
	ctx.setTransform(1,0,0,1,0,0);
	ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
	ctx.restore();
	 
	ctx.fillStyle = 'red';
	drawShip();
	
	lastUpdate = now;
	fps += (1/dt - fps) / 10;
}

function displayFrameCount (){
	fpsout.innerHTML = fps.toFixed(1)+" fps";
}



function drawShip(){
	ctx.save();
	ctx.rotate(2*Math.sin((new Date)/800));
	ctx.beginPath();
	ctx.moveTo(0,-20);
	ctx.lineTo(10,20);
	ctx.lineTo(0,10);
	ctx.lineTo(0,10);
	ctx.lineTo(-10,20);
	ctx.closePath();
	ctx.fill();
	ctx.restore();
}