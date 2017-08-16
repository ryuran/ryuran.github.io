(function () {
	var cat = document.getElementById('cat');
	var catHead = document.getElementById('cat-head');

	document.addEventListener('mousemove', function(e){
		var rect = cat.getBoundingClientRect();

		var pos = {
			top: rect.top + document.body.scrollTop,
			left: rect.left + document.body.scrollLeft
		};

		var x = e.clientX,
			y = e.clientY;
		var elementX = 145;
		var elementY = 63;
		x = x-elementX;
		y = y-elementY;

		var angle = Math.atan2(y,x)*180/Math.PI;

		var angleMax = 40;
		var angleMin = -22;
		if(angle > angleMax){
			angle = angleMax;
		}
		if(angle < angleMin){
			angle = angleMin;
		}
		catHead.style.transform = 'rotate(' + angle + 'deg)';
	});
}());