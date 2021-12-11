//Bytter hovedbilde ved klikk
function klikkBilde(imgs) {
    var expandImg = document.getElementById("hoved");
    expandImg.src = imgs.src;
    expandImg.parentElement.style.display = "block";
}
//Åpner og lukker ingredienslista
function openIngredienser() {
    document.getElementById("mySidenav").style.width = "235px";
}

function lukkeIngredienser() {
    document.getElementById("mySidenav").style.width = "0";
}

//Kall på funksjon når siden loader
window.onload = function() {
  fadeBokstaver('s','5s','1','0.2s');
  fadeBokstaver('p','5s','1','1.8s');
  fadeBokstaver('i','5s','1','3.5s');
  fadeBokstaver('r','5s','1','1.4s');
  fadeBokstaver('e','5s','1','2.9s');
};

//Animerer bokstaver
//object.style.animation = "name duration timingFunction delay iterationCount direction fillMode playState"
function fadeBokstaver(id, speed, antall, delay) {
    document.getElementById(id).style.WebkitAnimation = "fade " + speed + " " + delay + " " + antall; // Code for Safari 4.0 - 8.0
    document.getElementById(id).style.animation = "fade "  + speed + " " + delay + " " + antall;
}

// funksjonen fader angitt tag ved scrolling.	   
function fadeBilder(id){
	$(document).on("scroll", function () {
	var taggen = id;
	var pageTop = $(document).scrollTop();
	var pageBottom = pageTop + $(window).height();
	var tags = $(taggen);

	for (var i = 0; i < tags.length; i++) {
		 var tag = tags[i];
			if ($(tag).position().top < pageBottom) {
				$(tag).addClass("visible");
				} 
			else {
				 $(tag).removeClass("visible");
				 }
			    }
		});
   }
document.getElementById("section").innerHTML = fadeBilder("figure");

