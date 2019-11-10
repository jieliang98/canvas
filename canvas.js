window.addEventListener("load", () => {
	const colorPicker = document.getElementById("picker");	
	const canvas = document.getElementById("myCanvas");
	const ctx = canvas.getContext("2d");

	canvas.height = window.innerHeight * 0.8;
	canvas.width = window.innerWidth * 0.8;

	var painting = true;

	function keyPressed(e) {
		switch(e.keyCode) {
			// space
			case 32:
				ctx.clearRect(0, 0, canvas.width, canvas.height);
			// down
			case 38:
				painting = false;
				ctx.beginPath();
				break;
			// up
			case 40:
				painting = true;
				break;
			// b
			case 66:
				ctx.strokeStyle = "blue";
				colorPicker.value = "#0000ff";
				break;
			// r
			case 82:
				ctx.strokeStyle = "red";
				colorPicker.value = "#ff0000";
				break;
			// g
			case 71:
				ctx.strokeStyle = "green";
				colorPicker.value = "#008000";
				break;
			// y
			case 89:
				ctx.strokeStyle = "yellow";
				colorPicker.value = "#ffff00";
				break;

			default:

		}
	}

	function draw(e) {
		if(!painting) return;
		ctx.lineWidth = 10;
		ctx.lineCap = "round";	

		ctx.lineTo(e.clientX - 10, e.clientY - 10);
		ctx.stroke();
		ctx.beginPath();
		ctx.moveTo(e.clientX - 10, e.clientY - 10);
	}

	// Listeners
	window.addEventListener('keydown', keyPressed);
	canvas.addEventListener('mousemove', draw);

	colorPicker.addEventListener('input', updateColor);

	function updateColor(e) {
		ctx.strokeStyle = colorPicker.value;
	}
});


