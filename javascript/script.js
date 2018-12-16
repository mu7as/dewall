//-- jQuery ------------------------
$(document).ready(function(){

	//--- mobile nav ----------

	var mobNav = $(".mobNav"),
		mobAside = $(".mobAside"),
		navB = $(".navB"),
		menuB = $(".menuB");

	$(navB).click(function(){
		$(mobNav).slideToggle();
	});
	$(menuB).click(function(){
		$(mobAside).slideToggle();
	});

});

// -- JavaScript ----------------------------

document.addEventListener('DOMContentLoaded', function() {

	//--- select box ----------
	
	var go = document.getElementById('go'),
	select = document.getElementById('select');
			
	go.onmouseover = function() {
		this.href = select.value;
	};

}, false);

//--- goup ---------------------

var goup = document.getElementById('goup');
	
window.onscroll = function() {
	'use strict'
	if(window.pageYOffset >= 200) {
		goup.style.right = '20px';
	} else {
		goup.style.right = '-70px';
	}
};
	
goup.onclick = function() {
	window.scrollTo(0,0);
};


