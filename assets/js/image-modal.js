// Get the modal
var modal = document.getElementById("modal-container");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var images = document.getElementsByClassName("img-modal-src");
var modalImg = document.getElementById("img-modal");
var captionText = document.getElementById("caption");
for (var i = 0; i < images.length; i++) {
  var img = images[i]
  img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

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
