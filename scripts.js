function fade_in(func, msec, param) {
	document.body.style.opacity = "1";

	if(func) {
		setTimeout(function () {
		if (param) {
			func(param);
		} else {
			func();
		}
		
		}, msec);
	}
	
}

function fade_out(href) {
	document.body.style.opacity = "0";

	setTimeout(function () {
		window.location.href = href;
	}, 1000);
}