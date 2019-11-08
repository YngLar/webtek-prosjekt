var modal = document.getElementById("modal__wrapper");
var modalImg = document.getElementById("modal__img");
var captionText = document.getElementById("modal__caption");
function openModal(imgsrc, caption){
  modal.style.display = "block";
  modalImg.src = imgsrc;
  captionText.innerHTML = caption;
}

var span = document.getElementsByClassName("modal__close")[0];
span.onclick = function() {
  modal.style.display = "none";
}