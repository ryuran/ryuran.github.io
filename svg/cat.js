var svgCat = function () {
	var r = this,
		head = r.path("m 164.27858,81.45669 c 9.48616,-9.60054 11.25256,-3.30329 15.95577,-8.26601 4.70322,-4.96273 4.80621,-21.52817 4.80621,-21.52817 -1.41826,-1.44956 -9.84255,-5.341 -9.84255,-5.341 -2.20954,-9.20729 -10.94945,-15.18457 -20.23659,-16.59146 -4.67706,-0.68442 -6.18215,-18.62521 -8.90153,-18.55487 -3.17255,0.082 -10.4522,17.23895 -13.67135,18.27057 -3.21914,1.03164 -10.72053,8.29814 -14.33936,18.43441 -3.61883,10.13626 1.04592,20.33793 7.31582,28.19284 6.26991,7.85491 29.42741,14.98423 38.91358,5.38369 z").attr({fill: "#000","stroke": "none"}),
		body = r.path("m 88.95247,221.68292 c 15.99572,1.5835 55.60429,1.5447 62.54278,0.555 6.93848,-0.9899 9.00864,-7.8012 8.59767,-12.1484 1.90793,6.2939 2.70718,11.4565 10.30689,11.8684 7.59971,0.4117 10.29147,1.8157 11.7821,-5.4258 1.49063,-7.2415 -1.90399,-5.8349 -6.16922,-6.3013 0,0 -4.61276,-12.6181 -5.68852,-31.3452 -1.07576,-18.72707 8.25964,-22.61997 4.74428,-45.07821 -3.51536,-22.45825 -2.97896,-16.21498 -10.02548,-27.31397 -7.04651,-11.09899 -6.98967,-15.8089 0.39077,-26.96202 7.38044,-11.15312 -44.56384,-25.17208 -40.06874,-1.9182 4.49511,23.25387 -6.43509,24.69577 -12.01838,34.68839 -5.58328,9.99261 -18.80546,17.23182 -29.433017,36.39653 -10.263999,18.50913 -10.726572,23.89225 -12.0601,38.66968 -1.333527,14.7774 1.103242,32.7316 17.098967,34.3151 z").attr({fill:"#000","stroke": "none"}),
		tail = r.path("m 21.525314,111.40804 c 6.225435,-6.22945 18.910939,-18.7377 36.260132,-3.33047 17.34919,15.40723 -8.544324,62.24362 -4.378666,79.54575 4.165661,17.3021 17.292867,33.0808 36.315798,33.6746 19.022932,0.5937 6.697435,-6.9052 -16.713912,-22.3785 -23.411347,-15.4733 20.712644,-78.31193 -6.442836,-100.1682 -30.100589,-20.76166 -48.810449,2.58451 -55.130769,7.77791 -6.320321,5.19339 3.864818,11.10837 10.090253,4.87891 z").attr({fill: "#000","stroke": "none"});
	
	tail.hover(function(){
		this.animate({"transform": "r10,100,200"},200,"linear",function(){
			this.animate({"transform": "r0,100,200"},200,"linear");
		});
	});
	$(document).mousemove(function(e){
		pos = $('#cat').offset();
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
		head.transform("r"+angle+","+elementX+","+elementY);
	});
};