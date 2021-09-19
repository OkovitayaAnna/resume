var white = document.getElementById('white');
var yellow = document.getElementById('yellow');
var pink = document.getElementById('pink');
var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var main = document.getElementById('main');
var forms = document.getElementsByClassName('form');
var btn = document.getElementsByClassName('btn');
var change = document.getElementById('change');
var slides = document.getElementsByClassName('mySlides');
var i = 0;

white.addEventListener("click", function() {
  main.classList.add("white-main");
  if (i == 1) {main.classList.remove("yellow-main");}
  if (i == 2) {main.classList.remove("pink-main");}
  i = 0;
  for (let c = 0; c < forms.length; c++) {
    forms[c].style.backgroundColor = '#C0C0C0';
  }
  for (let c = 0; c < btn.length; c++) {
    btn[c].style.backgroundColor = '#C0C0C0';
  }
  localStorage.setItem('color', JSON.stringify('white'));
});

yellow.addEventListener("click", function() {
  main.classList.add("yellow-main");
  if (i == 0) {main.classList.remove("white-main");}
  if (i == 2) {main.classList.remove("pink-main");}
  i = 1;
  for (let c = 0; c < forms.length; c++) {
    forms[c].style.backgroundColor = '#F0E68C';
  }
  for (let c = 0; c < btn.length; c++) {
    btn[c].style.backgroundColor = '#F0E68C';
  }
  localStorage.setItem('color', JSON.stringify('yellow'));
});

pink.addEventListener("click", function() {
  main.classList.add("pink-main");
  if (i == 0) {main.classList.remove("white-main");}
  if (i == 1) {main.classList.remove("yellow-main");}
  i = 2;
  for (let c = 0; c < forms.length; c++) {
    forms[c].style.backgroundColor = '#ffc0cb';
  }
  for (let c = 0; c < btn.length; c++) {
    btn[c].style.backgroundColor = '#ffc0cb';
  }
  localStorage.setItem('color', JSON.stringify('pink'));
});

one.addEventListener("click", function() {
  document.getElementById('hb').style.display = 'block';
  document.getElementById('biography').style.display = 'block';
  document.getElementById('contacts').style.display = 'block';
  change.style.flexDirection = "column";
  for (let c = 0; c < slides.length; c++) {
    slides[c].style.width = '500px';
    slides[c].children[0].style.height = '400px';
  }
  document.getElementById('projects').style.display = "block";
  document.getElementById('hideP').style.display = "block";
  localStorage.setItem('block', JSON.stringify('one'));
  document.getElementById('hideD').style.display = "block";
  document.getElementById('diplomsM').style.display = "block";
  document.getElementById('output').style.width = "200px";
  document.getElementById('output').style.height = "300px";
  document.getElementById('output').style.objectFit = "cover";
  document.getElementById('output').style.borderRadius = "20px";
  document.getElementById('information-about-me').style.flexDirection = "row";
  document.getElementById('my-photo').style.marginLeft = "0";
  document.getElementById('my-photo').style.marginRight = "0";
  document.getElementById('my-name').style.marginLeft = "0";
  document.getElementById('my-name').style.marginRight = "0";
});

two.addEventListener("click", function() {
  document.getElementById('hb').style.display = 'none';
  document.getElementById('biography').style.display = 'none';
  document.getElementById('contacts').style.display = 'none';
  change.style.flexDirection = "column-reverse";
  for (let c = 0; c < slides.length; c++) {
    slides[c].style.width = '800px';
    slides[c].children[0].style.height = '600px';
  }
  document.getElementById('projects').style.display = "block";
  document.getElementById('hideP').style.display = "block";
  localStorage.setItem('block', JSON.stringify('two'));
  document.getElementById('hideD').style.display = "block";
  document.getElementById('diplomsM').style.display = "block";
  document.getElementById('output').style.width = "100px";
  document.getElementById('output').style.height = "100px";
  document.getElementById('output').style.objectFit = "cover";
  document.getElementById('output').style.borderRadius = "200px";
  document.getElementById('information-about-me').style.flexDirection = "column";
  document.getElementById('my-photo').style.marginLeft = "auto";
  document.getElementById('my-photo').style.marginRight = "auto";
  document.getElementById('my-name').style.marginLeft = "auto";
  document.getElementById('my-name').style.marginRight = "auto";
});



three.addEventListener("click", function() {
  document.getElementById('hb').style.display = 'none';
  document.getElementById('biography').style.display = 'none';
  document.getElementById('contacts').style.display = 'block';
  change.style.flexDirection = "column";
  for (let c = 0; c < slides.length; c++) {
    slides[c].style.width = '500px';
    slides[c].children[0].style.height = '400px';
  }
  change.style.flexDirection = "column";
  document.getElementById('projects').style.display = "none";
  document.getElementById('hideP').style.display = "none";
  localStorage.setItem('block', JSON.stringify('three'));
  document.getElementById('hideD').style.display = "none";
  document.getElementById('diplomsM').style.display = "none";
  document.getElementById('output').style.width = "200px";
  document.getElementById('output').style.height = "300px";
  document.getElementById('output').style.objectFit = "cover";
  document.getElementById('output').style.borderRadius = "50px";
  document.getElementById('information-about-me').style.flexDirection = "row";
  document.getElementById('my-photo').style.marginLeft = "0";
  document.getElementById('my-photo').style.marginRight = "0";
  document.getElementById('my-name').style.marginLeft = "0";
  document.getElementById('my-name').style.marginRight = "0";
});



var block = JSON.parse(localStorage.getItem('block'));
var color = JSON.parse(localStorage.getItem('color'));

if (block == 'one') {
  document.getElementById('hb').style.display = 'block';
  document.getElementById('biography').style.display = 'block';
  document.getElementById('contacts').style.display = 'block';
  change.style.flexDirection = "column";
  document.getElementById('output').style.width = "200px";
  document.getElementById('output').style.height = "300px";
  document.getElementById('output').style.objectFit = "cover";
  for (let c = 0; c < slides.length; c++) {
    slides[c].style.width = '500px';
    slides[c].children[0].style.height = '400px';
  }
  document.getElementById('projects').style.display = "block";
  document.getElementById('hideP').style.display = "block";
  document.getElementById('hideD').style.display = "block";
  document.getElementById('diplomsM').style.display = "block";
  document.getElementById('output').style.borderRadius = "20px";
  document.getElementById('information-about-me').style.flexDirection = "row";
  document.getElementById('my-photo').style.marginLeft = "0";
  document.getElementById('my-photo').style.marginRight = "0";
  document.getElementById('my-name').style.marginLeft = "0";
  document.getElementById('my-name').style.marginRight = "0";
}

if (block == 'two') {
  document.getElementById('hb').style.display = 'none';
  document.getElementById('biography').style.display = 'none';
  document.getElementById('contacts').style.display = 'none';
  change.style.flexDirection = "column-reverse";
  for (let c = 0; c < slides.length; c++) {
    slides[c].style.width = '800px';
    slides[c].children[0].style.height = '600px';
  }
  document.getElementById('projects').style.display = "block";
  document.getElementById('hideP').style.display = "block";
  document.getElementById('hideD').style.display = "block";
  document.getElementById('diplomsM').style.display = "block";
  document.getElementById('output').style.width = "100px";
  document.getElementById('output').style.height = "100px";
  document.getElementById('output').style.objectFit = "cover";
  document.getElementById('output').style.borderRadius = "200px";
  document.getElementById('information-about-me').style.flexDirection = "column";
  document.getElementById('my-photo').style.marginLeft = "auto";
  document.getElementById('my-photo').style.marginRight = "auto";
  document.getElementById('my-name').style.marginLeft = "auto";
  document.getElementById('my-name').style.marginRight = "auto";
}

if (block == 'three') {
  document.getElementById('hb').style.display = 'none';
  document.getElementById('biography').style.display = 'none';
  document.getElementById('contacts').style.display = 'block';
  change.style.flexDirection = "column";
  for (let c = 0; c < slides.length; c++) {
    slides[c].style.width = '500px';
    slides[c].children[0].style.height = '400px';
  }
  change.style.flexDirection = "column";
  document.getElementById('projects').style.display = "none";
  document.getElementById('hideP').style.display = "none";
  document.getElementById('hideD').style.display = "none";
  document.getElementById('diplomsM').style.display = "none";
  document.getElementById('output').style.width = "200px";
  document.getElementById('output').style.height = "300px";
  document.getElementById('output').style.objectFit = "cover";
  document.getElementById('output').style.borderRadius = "50px";
  document.getElementById('information-about-me').style.flexDirection = "row";
  document.getElementById('my-photo').style.marginLeft = "0";
  document.getElementById('my-photo').style.marginRight = "0";
  document.getElementById('my-name').style.marginLeft = "0";
  document.getElementById('my-name').style.marginRight = "0";
}

if (color == 'white') {
  main.classList.add("white-main");
  if (i == 1) {main.classList.remove("yellow-main");}
  if (i == 2) {main.classList.remove("pink-main");}
  i = 0;
  for (let c = 0; c < forms.length; c++) {
    forms[c].style.backgroundColor = '#C0C0C0';
  }
  for (let c = 0; c < btn.length; c++) {
    btn[c].style.backgroundColor = '#C0C0C0';
  }
}

if (color == 'yellow') {
  main.classList.add("yellow-main");
  if (i == 0) {main.classList.remove("white-main");}
  if (i == 2) {main.classList.remove("pink-main");}
  i = 1;
  for (let c = 0; c < forms.length; c++) {
    forms[c].style.backgroundColor = '#F0E68C';
  }
  for (let c = 0; c < btn.length; c++) {
    btn[c].style.backgroundColor = '#F0E68C';
  }
}

if (color == 'pink') {
  main.classList.add("pink-main");
  if (i == 0) {main.classList.remove("white-main");}
  if (i == 1) {main.classList.remove("yellow-main");}
  i = 2;
  for (let c = 0; c < forms.length; c++) {
    forms[c].style.backgroundColor = '#ffc0cb';
  }
  for (let c = 0; c < btn.length; c++) {
    btn[c].style.backgroundColor = '#ffc0cb';
  }
}
