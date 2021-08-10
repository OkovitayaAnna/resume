var orange = document.getElementById('orange');
var yellow = document.getElementById('yellow');
var pink = document.getElementById('pink');
var one = document.getElementById('one');
var two = document.getElementById('two');
var main = document.getElementById('main');
var forms = document.getElementsByClassName('form');
var btn = document.getElementsByClassName('btn');
var m2 = document.getElementById('my-photo2');
var change = document.getElementById('change');
var slides = document.getElementsByClassName('mySlides');
var i = 0;

orange.addEventListener("click", function() {
  main.classList.add("orange-main");
  if (i == 1) {main.classList.remove("yellow-main");}
  if (i == 2) {main.classList.remove("pink-main");}
  i = 0;
  for (let c = 0; c < forms.length; c++) {
    forms[c].style.backgroundColor = '#FF7F50';
  }
  for (let c = 0; c < btn.length; c++) {
    btn[c].style.backgroundColor = '#FF7F50';
  }
});

yellow.addEventListener("click", function() {
  main.classList.add("yellow-main");
  if (i == 0) {main.classList.remove("orange-main");}
  if (i == 2) {main.classList.remove("pink-main");}
  i = 1;
  for (let c = 0; c < forms.length; c++) {
    forms[c].style.backgroundColor = '#F0E68C';
  }
  for (let c = 0; c < btn.length; c++) {
    btn[c].style.backgroundColor = '#F0E68C';
  }
});

pink.addEventListener("click", function() {
  main.classList.add("pink-main");
  if (i == 0) {main.classList.remove("orange-main");}
  if (i == 1) {main.classList.remove("yellow-main");}
  i = 2;
  for (let c = 0; c < forms.length; c++) {
    forms[c].style.backgroundColor = '#ffc0cb';
  }
  for (let c = 0; c < btn.length; c++) {
    btn[c].style.backgroundColor = '#ffc0cb';
  }
});

one.addEventListener("click", function() {
  document.getElementById('hb').style.display = 'block';
  document.getElementById('biography').style.display = 'block';
  document.getElementById('contacts').style.display = 'block';
  document.getElementById('my-photo').style.display = 'flex';
  document.getElementById('my-name').style.width = '60%';
  m2.style.display = 'none';
  change.style.flexDirection = "column";
  for (let c = 0; c < slides.length; c++) {
    slides[c].style.width = '500px';
    slides[c].children[0].style.height = '400px';
  }
});

two.addEventListener("click", function() {
  document.getElementById('hb').style.display = 'none';
  document.getElementById('biography').style.display = 'none';
  document.getElementById('contacts').style.display = 'none';
  document.getElementById('my-photo').style.display = 'none';
  document.getElementById('my-name').style.width = '100%';
  m2.style.display = 'block';
  m2.style.marginLeft = 'auto';
  m2.style.marginRight = 'auto';
  m2.style.borderRadius = '360px';
  m2.style.marginTop = '20px';
  change.style.flexDirection = "column-reverse";
  for (let c = 0; c < slides.length; c++) {
    slides[c].style.width = '800px';
    slides[c].children[0].style.height = '600px';
  }
});
