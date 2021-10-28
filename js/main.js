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



var hidePt = JSON.parse(localStorage.getItem('hideP'));
var hideDt = JSON.parse(localStorage.getItem('hideD'));

if (hidePt == true) {
  document.getElementById('hidePr').parentElement.nextElementSibling.style.display = "none";
  document.getElementById('hidePr').classList.add("hiden");
  document.getElementById('hidePr').innerText = "Отобразить проекты";
} else {
  document.getElementById('hidePr').classList.remove("hiden");
  document.getElementById('hidePr').parentElement.nextElementSibling.style.display = "flex";
  document.getElementById('hidePr').innerText = "Скрыть проекты";
}

if (hideDt == true) {
  document.getElementById('hideDip').parentElement.nextElementSibling.style.display = "none";
  document.getElementById('hideDip').classList.add("hiden");
  document.getElementById('hideDip').innerText = "Отобразить дипломы";
} else {
  document.getElementById('hideDip').classList.remove("hiden");
  document.getElementById('hideDip').parentElement.nextElementSibling.style.display = "flex";
  document.getElementById('hideDip').innerText = "Скрыть дипломы";
}

var hideP = document.getElementById('hidePr');
var hideD = document.getElementById('hideDip');

hideP.addEventListener("click", function () {
  if (this.classList.contains("hiden") == false) {
    this.parentElement.nextElementSibling.style.display = "none";
    this.classList.add("hiden");
    hideP.innerText = "Отобразить проекты";
    localStorage.setItem('hideP', true);
  } else {
    this.classList.remove("hiden");
    this.parentElement.nextElementSibling.style.display = "flex";
    hideP.innerText = "Скрыть проекты";
    localStorage.setItem('hideP', false);
  }
});

hideD.addEventListener("click", function () {
  if (this.classList.contains("hiden") == false) {
    this.parentElement.nextElementSibling.style.display = "none";
    this.classList.add("hiden");
    hideD.innerText = "Отобразить дипломы";
    localStorage.setItem('hideD', true);
  } else {
    this.classList.remove("hiden");
    this.parentElement.nextElementSibling.style.display = "flex";
    hideD.innerText = "Скрыть дипломы";
    localStorage.setItem('hideD', false);
  }
});



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
    newDiplom.innerHTML = `<img src="${src}" onclick="myFunction(this);"> <button class="dltDiplom btn open-button"> × </button>`;
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
    newDiplom.innerHTML = `<img src="${src}" onclick="myFunction(this);"> <button class="dltDiplom btn open-button"> × </button>`;
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

  if (color == 'white') {
    for (let c = 0; c < btn.length; c++) {
      btn[c].style.backgroundColor = '#C0C0C0';
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

if (params.editMode && params.editMode == "true") {
  eM = true;
}

if (eM == true) {
  document.getElementById('main').classList.add("edit-mode");
} else {
  document.getElementById('main').classList.remove("edit-mode");
}



/*
function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    }
    rawFile.send(null);
}

readTextFile('file://C:/Users/Общий/Desktop/Ann-portfolio/my-portfolio/МАН2021/js/kontent.txt');
*/

/*
var reader = new FileReader();

reader.onloadend = function(event) {
 var contents = event.target.result,
  error = event.target.error;
 if (error != null) {
  switch (error.code) {
   case error.ENCODING_ERR:
    console.error("Проблемы кодировки!");
    break;

   case error.NOT_FOUND_ERR:
    console.error("Файл не найден!");
    break;

   case error.NOT_READABLE_ERR:
    console.error("Файл не может быть прочитан!");
    break;

   case error.SECURITY_ERR:
    console.error("Проблема безопасности в файл!");
    break;

   default:
    console.error("Я понятия не имею, что случилось!");
  }
 } else {
  progressNode.max = 1;
  progressNode.value = 1;
  console.log("Contents: " + contents);
 }
};

reader.readAsText('file://C:/Users/Общий/Desktop/Ann-portfolio/my-portfolio/МАН2021/js/kontent.txt');
*/




include("js/dataBase.js");
include("js/accordion.js");
include("js/skills.colors.js");
include("js/skills.js");
include("js/circles.js");
include("js/isAvailable.js");
include("js/update.js");
