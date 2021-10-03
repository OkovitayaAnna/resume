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



var crtD = document.getElementById('crtDiplom');

crtD.addEventListener("change", function (event) {
  const fileD = event.target.files[0];
	const readerD = new FileReader();
	readerD.onloadend = () => {
		const base64StringD = readerD.result.replace('data:', '').replace(/^.+,/, '');
    var diploms = JSON.parse(localStorage.getItem('diploms'));
    if (diploms == null) {
      diploms = [];
    };
    diploms.push([base64StringD]);
		localStorage.setItem('diploms', JSON.stringify(diploms));
		var src = `data:image/png;base64,${base64StringD}`;

    newDiplom = document.createElement('div');
    newDiplom.classList = 'diplom column';
    newDiplom.innerHTML = `<img src="${src}" alt="diplom" onclick="myFunction(this);"> <button class="dltDiplom btn open-button"> × </button>`;
    document.getElementById('diploms').prepend(newDiplom);
    listenerRemoveDiplom();
    addColorForBtn();
	};
	readerD.readAsDataURL(fileD);
});

const base64StringD = JSON.parse(localStorage.getItem('diploms'));
if (base64StringD != [] && base64StringD != null) {
  base64StringD.forEach(element => {
    var src = `data:image/png;base64,${element}`;
  
    newDiplom = document.createElement('div');
    newDiplom.classList = 'diplom column';
    newDiplom.innerHTML = `<img src="${src}" alt="diplom" onclick="myFunction(this);"> <button class="dltDiplom btn open-button"> × </button>`;
    document.getElementById('diploms').prepend(newDiplom);
    listenerRemoveDiplom();
  });
}

function listenerRemoveDiplom() {
  var dltD = document.getElementsByClassName('dltDiplom');

  for (let b = 0; b < dltD.length; b++) {
    const element = dltD[b];
    element.addEventListener("click", function () {
      var srcEl = element.parentElement.children[0].src;
      element.parentElement.remove();
      var diploms = JSON.parse(localStorage.getItem('diploms'));
      var i = 0;
      diploms.forEach(element => {
        if (element[0] == srcEl.replace('data:image/png;base64,', '')) {diploms.splice(i, 1)}
        i++;
        localStorage.setItem('diploms', JSON.stringify(diploms));
      });
    });
  }
}

function addColorForBtn() {
  var color = JSON.parse(localStorage.getItem('color'));
  var btn = document.getElementsByClassName('btn');

  if (color == 'orange') {
    for (let c = 0; c < btn.length; c++) {
      btn[c].style.backgroundColor = '#FF7F50';
    }
  }
  if (color == 'pink') {
    for (let c = 0; c < btn.length; c++) {
      btn[c].style.backgroundColor = '#ffc0cb';
    }
  }
  if (color == 'yellow') {
    for (let c = 0; c < btn.length; c++) {
      btn[c].style.backgroundColor = '#F0E68C';
    }
  }
}



const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
var eM = false;

for (key in params) {
  if (key == "editMode") {
    eM = true;
  }
}

if (eM == true) {
  document.getElementById('main').classList.add("edit-mode");
} else {
  document.getElementById('main').classList.remove("edit-mode");
}



include("js/dataBase.js");
include("js/accordion.js");
include("js/skills.colors.js");
include("js/skills.js");
include("js/circles.js");
