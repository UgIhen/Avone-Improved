// Get the modal
var random = document.getElementById("nvrmyModal");

// Get the button that opens the modal
var btnicon = document.getElementById("seicon");

// Get the <span> element that closes the modal
var tabiconspan = document.getElementsByClassName("nvrclose")[0];

// When the user clicks the button, open the modal 
btnicon.onclick = function() {
  random.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
tabiconspan.onclick = function() {
  random.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == random) {
    random.style.display = "none";
  }
}
  