var ctx = document.getElementById("main_canvas").getContext('2d');
window.addEventListener('resize', resizeCanvas, false); resizeCanvas();

function resizeCanvas() {
	var w = document.body.offsetWidth,
		h = document.body.offsetHeight;
	ctx.canvas.width  = w;
	ctx.canvas.height = h;
	ctx.translate(w/2, h/2);
}