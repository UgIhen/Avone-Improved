function on() {
	document.getElementById("menu").style.display = "block";
  }
  
  function off() {
	document.getElementById("menu").style.display = "none";
  }






$(function() {
	var current_pos;
	
	$('#carousel').owlCarousel({
		items: 1,
		mouseDrag: true,
		touchDrag: false,
		autoplay: true,
		autoplayTimeout: 2000,
		nav: true,
		loop: true,
		navText: ['', ''],
		dots: true,
		onInitialized: function(e) {
			current_pos = e.item.index;
			
		},
		onTranslate: function(e) {
			var direction = e.item.index > current_pos? 1 : 0,
					indicator_c = direction? 'next' : 'prev',
					$dots = $(e.currentTarget).find('.owl-dots'),
					$current_dot = $dots.children().eq(current_pos);
						
			$current_dot.html('<div class="dot-indicator '+ indicator_c +'">');
			
			current_pos = e.item.index;
			
			setTimeout(function() {
				$current_dot.html('');
			}, 200);	
		}
	});
});



// GO TO TOP BUTTON 
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function(){
    window.scrollY >= 150 ? goTopBtn.classList.add("active"): goTopBtn.classList.remove("active");
 });



 
// SEC1 STICK ONSCROLL 

const section = document.querySelector("[data-header]");

window.addEventListener("scroll", function(){
   window.scrollY >= 20 ? header.classList.add("active") : header.classList.remove("active");
});



var angle = 0;
function galleryspin(sign) { 
spinner = document.querySelector("#spinner");
if (!sign) { angle = angle + 45; } else { angle = angle - 45; }
spinner.setAttribute("style","-webkit-transform: rotateY("+ angle +"deg); -moz-transform: rotateY("+ angle +"deg); transform: rotateY("+ angle +"deg);");
}


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("seicon");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}




// REVIEW MODAL 
function submit(dd) {
	dd.preventDefault();
	// gets values
	var val2 = document.querySelector('#recipient-title').value;
	var valx = document.querySelector('#recipient-email').value;
	var val4 = document.querySelector('#message').value;


	// get regular expressions (regex)
	let checkusertitle = /^[a-zA-Z\ 0-9]{3,}$/;
	let checkuem = /^[\w\.]{2,}(@)[a-zA-Z]{2,}(.)[A-Za-z]{2,3}(.)[a-zA-Z]{2,3}$/;
	let checkupa = /^[\w\ \W]{4,}$/; 
	let finalcheckok = " " ;
	let finalchecknotok = "incorrect syntax!"

	let output1 = 
	(checkusertitle.test(val2) == true && val2 !== "")
	? finalcheckok
	: finalchecknotok;
	document.getElementById("demose").innerHTML = output1; 

	let output3 = 
	(checkuem.test(valx) == true && valx !== "") 
	? finalcheckok
	: finalchecknotok;
	document.getElementById("demose2").innerHTML = output3;
	
	let output4 = 
	(checkupa.test(val4) == true && val4 !== "")
	? finalcheckok
	: finalchecknotok;
	document.getElementById("demose3").innerHTML = output4; 
  

	// set values
	
	if (output1 == finalcheckok && output3 == finalcheckok && output4 == finalcheckok)  
	{
	document.querySelector("#jandgrev4").style.cssText = "font-size: 80%; font-style: italic";
	document.querySelector("#jandgrev4").innerHTML = val2;
	document.querySelector("#jandgrev5").style.cssText = "font-size: 80%; font-style: bold; color: #9a8979";
  	document.querySelector("#jandgrev5").innerHTML = valx;
  	document.querySelector("#jandgrev6").style.cssText = "font-size: 100%; font-style: bold; color: green"; 
  	document.querySelector("#jandgrev6").innerHTML = val4; 
	alert("Thank you for your feedback!")}
	else 
	{
		alert(finalchecknotok); 
	}
}


// ENQUIRY MODAL 
function submit2(dd) {
	dd.preventDefault();
	// gets values
	var val7 = document.querySelector('#recipient-mail').value;
	var val8 = document.querySelector('#message-text').value;


	// get regular expressions (regex)
	let checkuname = /^[\w\.]{2,}(@)[a-zA-Z]{2,}(.)[A-Za-z]{2,3}(.)[a-zA-Z]{2,3}$/;
	let checkmes = /^[a-zA-Z\ 0-9]{10,}$/;
	let finaleqcheckok = " " ;
	let finaleqchecknotok = "Error delivering message, please check format!"

	let output7 = 
	(checkuname.test(val7) == true && val7 !== "")
	? finaleqcheckok
	: finaleqchecknotok;
	document.querySelector("#demose7").innerHTML = output7;

	let output8 = 
	(checkmes.test(val8) == true && val8 !== "")
	? finaleqcheckok
	: finaleqchecknotok;
	document.querySelector("#demose8").innerHTML = output8;
  

	// set values
	
	if (output7 == finaleqcheckok && output8 == finaleqcheckok)  
	{
		alert("Message submitted successfully!")
	}
	else 
	{
		alert(finaleqchecknotok); 
	}
}










