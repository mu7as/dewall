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