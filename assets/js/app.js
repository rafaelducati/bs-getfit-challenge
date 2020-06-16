let positionScroll = 0;
let moving = false;
let windowHeight = window.innerHeight;
let elements = document.getElementsByClassName('hidden');

function hiddenElements(scrollPosition) {
	if(elements){
		const elementsInvisible = [];
		for (let element of elements) {
			if((element.offsetTop >= scrollPosition || element.offsetTop + (element.offsetHeight / 2) > scrollPosition) && element.offsetTop < scrollPosition + windowHeight*0.8){
				elementsInvisible.push(element);
			}
		}
		for (var i = 0; i < elementsInvisible.length; i++) {
			elementsInvisible[i].classList.remove('hidden');
            elementsInvisible[i].classList.add('loaded');
		}
	}
}

document.querySelector('.workouts__video').addEventListener('click', function(){
	document.querySelector('.dialog').classList.add('open');
	setTimeout(function(){
		document.querySelector('.dialog').classList.add('openning');
	}, 100);
});

document.querySelector('.dialog').addEventListener('click', function(e){
	if(e.target.classList.contains('open') || e.target.classList.contains('close')){
		document.querySelector('.dialog').classList.remove('openning');
		setTimeout(function(){
			document.querySelector('.dialog').classList.remove('open');
		}, 500);
	}
});

document.querySelector('.header__nav-toggle').addEventListener('click', function(e){
	document.querySelector('.header__nav').classList.add('header__nav--open');
});

document.querySelector('.header__close').addEventListener('click', function(e){
	document.querySelector('.header__nav').classList.remove('header__nav--open');
});

document.querySelector('form').addEventListener('submit', function(e){
	e.preventDefault();
});

window.addEventListener('scroll', function(e) {
	positionScroll = window.scrollY;

	if (!moving) {
		window.requestAnimationFrame(function() {
			hiddenElements(positionScroll);
			moving = false;
		});

		moving = true;
	}
});

window.onload = function(){
	positionScroll = window.scrollY;
	hiddenElements(positionScroll);
}