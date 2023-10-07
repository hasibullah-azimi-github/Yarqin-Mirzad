const slider_img = document.querySelectorAll('.slide-img'),
	  dot = document.querySelectorAll('.dot');
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 3000);
function autoSlide() {
	counter += 1;
	slidefun(counter);
}
function plusSlides(n) {
	counter += n;
	slidefun(counter);
	resetTimer();
}
function currentSlide(n) {
	counter = n;
	slidefun(counter);
	resetTimer();
}
function resetTimer() {
	clearInterval(timer);
	timer = setInterval(autoSlide, 3000);
}

function slidefun(n) {
	
	let i;
	for(i = 0;i<slider_img.length;i++){
		slider_img[i].style.display = "none";
	}
	for(i = 0;i<dot.length;i++) {
		dot[i].className = dot[i].className.replace(' active', '');
	}
	if(n > slider_img.length){
	   counter = 1;
	   }
	if(n < 1){
	   counter = slider_img.length;
	   }
	slider_img[counter - 1].style.display = "block";
	dot[counter - 1].className += " active";
}