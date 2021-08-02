function include(url) {
	var script = document.createElement('script');
	script.src = url;
	document.getElementsByTagName('head')[0].appendChild(script);
}

var slideIndex = 1;
showSlides(slideIndex);

// Вперед/назад элементы управления
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Элементы управления миниатюрами изображений
function currentSlide(n) {
  showSlides(slideIndex = n);
}


function myFunction(imgs) {
  // Получить развернутое изображение
  var expandImg = document.getElementById("expandedImg");
  // Получить текст изображения
  var imgText = document.getElementById("imgtext");
  // Используйте тот же src в развернутом изображении, что и изображение, нажатое на сетке
  expandImg.src = imgs.src;
  // Используйте значение атрибута alt кликабельного изображения в качестве текста внутри развернутого изображения
  imgText.innerHTML = imgs.alt;
  // Показать элемент контейнера (скрытый с помощью CSS)
  expandImg.parentElement.style.display = "block";
}





function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}



var hide = document.getElementsByClassName('hide');

for (i = 0; i < hide.length; i++) {
  hide[i].addEventListener("click", function () {
    this.parentElement.nextElementSibling.style.display = "none";
  });
}



include("js/accordion.js");
include("js/skills.colors.js");
include("js/skills.js");
include("js/circles.js");
