var ctx = document.querySelector('canvas').getContext('2d');

resizeCanvas();

window.addEventListener('resize', resizeCanvas, false);

function resizeCanvas() {
	var w = document.body.offsetWidth,
		h = document.body.offsetHeight;
	ctx.canvas.width  = w;
	ctx.canvas.height = h;
	ctx.translate(w/2,h/2);
}