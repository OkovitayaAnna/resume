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


function myFunction(imgs) {
  // Получить развернутое изображение
  var expandImg = document.getElementById("expandedImg");
  // Получить текст изображения
  var imgText = document.getElementById("imgtext");
  // Использовать тот же src в развернутом изображении, что и изображение, нажатое на сетке
  expandImg.src = imgs.src;
  // Использовать значение атрибута alt в качестве текста внутри развернутого изображения
  imgText.innerHTML = imgs.alt;
  // Показать элемент контейнера (скрытый с помощью CSS)
  expandImg.parentElement.style.display = "block";
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  if (slides[slideIndex-1]) {
    slides[slideIndex-1].style.display = "block";
  }
}

function plusSlidesP(n) {
  showSlidesP(slideIndex += n);
}

function showSlidesP(n) {
  var i;
  var slides = document.getElementsByClassName("mySlidesP");
  //var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  //for (i = 0; i < dots.length; i++) {
      //dots[i].className = dots[i].className.replace(" active", "");
  //}
  if (slides[slideIndex-1]) {
    slides[slideIndex-1].style.display = "flex";
    //dots[slideIndex-1].className += " active";
  }
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
    if (element[0].includes('diplom')) {
      src = element;
    }
  
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
        if (element[0] == srcEl.replace('data:image/png;base64,', '') || srcEl.includes(element[0])) {diploms.splice(i, 1)}
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



var crtPr = document.getElementById('crtPr');

crtPr.addEventListener("change", function (event) {
  const fileD = event.target.files[0];
	const readerD = new FileReader();
	readerD.onloadend = () => {
		const base64StringD = readerD.result.replace('data:', '').replace(/^.+,/, '');
    var projects = JSON.parse(localStorage.getItem('projects'));
    if (projects == null) {
      projects = [];
    };
    projects.push([base64StringD]);
		localStorage.setItem('projects', JSON.stringify(projects));
		var srcP = `data:image/png;base64,${base64StringD}`;

    newProject = document.createElement('div');
    newProject.classList = 'mySlides fade';
    newProject.innerHTML = `<img src="${srcP}"  style="width:100%; height:400px; object-fit:contain"> <div> <a href="https://www.google.com" class="text"> https://www.google.com </a> </div> <button class="dltProject btn open-button"> × </button>`;
    if (eM == true) {
      newProject.innerHTML = `<img src="${srcP}"  style="width:100%; height:400px; object-fit:contain"> <div> <a href="https://www.google.com" class="text" contentEditable=true> https://www.google.com </a> </div> <button class="dltProject btn open-button"> × </button>`;
    }
    document.getElementById('projects-container').append(newProject);
    if (projects.length == 1) {
      newProject.style.display = "block";
    }
    listenerRemoveProject();
    var hrefs = JSON.parse(localStorage.getItem('hrefs'));

    if (hrefs == [] || hrefs == undefined || hrefs == null) {
      hrefs = [];
    }
    hrefs.push('https://www.google.com');
    localStorage.setItem('hrefs', JSON.stringify(hrefs));
//    var numberDot = projects.length;
//    newDot = document.createElement('span');
//    newDot.classList = 'dot';
//    newDot.id = `${numberDot}`
//    newDot.addEventListener("click", function () {
//      var number = this.id;
//      showSlides(slideIndex = Number(number));
//    });
//    document.getElementById('dots').append(newDot);
    document.getElementById('prev').style.display = "block";
    document.getElementById('next').style.display = "block";
    addColorForBtn();
    include("js/update.js");
	};
	readerD.readAsDataURL(fileD);
});



const base64StringP = JSON.parse(localStorage.getItem('projects'));
if (base64StringP != [] && base64StringP != null) {
  var i = 0;
  base64StringP.forEach(element => {
    var src = `data:image/png;base64,${element}`;
    var href = JSON.parse(localStorage.getItem('hrefs'))[i];
    if (element[0].includes('project') || element[0].includes('resume')) {
      src = element[0];
    }
    newProject = document.createElement('div');
    newProject.classList = 'mySlides fade';
    newProject.innerHTML = `<img src="${src}"  style="width:100%; height:400px; object-fit:contain"> <div> <a href="${href}" class="text"> ${href} </a> </div> <button class="dltProject btn open-button"> × </button>`;
    if (eM == true) {
      newProject.innerHTML = `<img src="${src}"  style="width:100%; height:400px; object-fit:contain"> <div> <a href="${href}" class="text" contentEditable=true> ${href} </a> </div> <button class="dltProject btn open-button"> × </button>`;
    }
    document.getElementById('projects-container').append(newProject);
    if (i == 0) {
      newProject.style.display = "block";
    }
      listenerRemoveProject();
//    var numberDot = i;
//    newDot = document.createElement('span');
//    newDot.classList = 'dot';
//    newDot.id = `${numberDot}`
//    newDot.addEventListener("click", function () {
//      var number = this.id;
//      showSlides(slideIndex = Number(number));
//   });
//    document.getElementById('dots').append(newDot);
    document.getElementById('prev').style.display = "block";
    document.getElementById('next').style.display = "block";
    addColorForBtn();
    include("js/update.js");
    i++;
  });
}

function listenerRemoveProject() {
  var dltP = document.getElementsByClassName('dltProject');

  for (let b = 0; b < dltP.length; b++) {
    const elementD = dltP[b];
    elementD.addEventListener("click", function () {
      var srcEl = elementD.parentElement.children[0].src;
      var projects = JSON.parse(localStorage.getItem('projects'));
      var hrefs = JSON.parse(localStorage.getItem('hrefs'));
      var i = 0;
      projects.forEach(element => {
        if (element[0] == srcEl.replace('data:image/png;base64,', '') || srcEl.includes(element[0])) {projects.splice(i, 1); hrefs.splice(i,1);}
        i++;
        localStorage.setItem('projects', JSON.stringify(projects));
        localStorage.setItem('hrefs', JSON.stringify(hrefs));
        if (projects.length == 0) {
          document.getElementById('prev').style.display = "none";
          document.getElementById('next').style.display = "none";
        }
        if (projects.length > 0 && elementD.parentElement.nextElementSibling) {
          elementD.parentElement.nextElementSibling.style.display = "block";
        }
        if (projects.length > 0 && !elementD.parentElement.nextElementSibling) {
          elementD.parentElement.previousElementSibling.style.display = "block";
        }
        elementD.parentElement.remove();
      });
    });
  }
}



include("js/dataBase.js");
include("js/accordion.js");
include("js/skills.colors.js");
include("js/skills.js");
include("js/circles.js");
include("js/isAvailable.js");
include("js/update.js");
