var orange = document.getElementById('orange');
var yellow = document.getElementById('yellow');
var main = document.getElementById('main');
var none = document.getElementsByClassName('none');
var forms = document.getElementsByClassName('form');
var btn = document.getElementsByClassName('btn');
var m2 = document.getElementById('my-photo2');
var i = 0;

orange.addEventListener("click", function() {
  main.classList.add("orange-main");
  if (i == 1) {main.classList.remove("yellow-main");}
  i = 0;
  for (let c = 0; c < none.length; c++) {
    none[c].style.color = '#FFA07A';
  }
  for (let c = 0; c < forms.length; c++) {
    forms[c].style.backgroundColor = '#FF7F50';
  }
  for (let c = 0; c < btn.length; c++) {
    btn[c].style.backgroundColor = '#FF7F50';
  }
  document.getElementById('courses').style.display = 'flex';
  document.getElementById('hb').style.display = 'block';
  document.getElementById('biography').style.display = 'block';
  document.getElementById('contacts').style.display = 'block';
  document.getElementById('my-photo').style.display = 'flex';
  document.getElementById('my-name').style.width = '50%';
  m2.style.display = 'none';
  document.getElementById('o').style.display = 'flex';
  document.getElementById('y').style.display = 'none';
});

yellow.addEventListener("click", function() {
  main.classList.add("yellow-main");
  if (i == 0) {main.classList.remove("orange-main");}
  i = 1;
  for (let c = 0; c < none.length; c++) {
    none[c].style.color = '#FFFACD';
  }
  for (let c = 0; c < forms.length; c++) {
    forms[c].style.backgroundColor = '#F0E68C';
  }
  for (let c = 0; c < btn.length; c++) {
    btn[c].style.backgroundColor = '#F0E68C';
  }
  document.getElementById('courses').style.display = 'none';
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
  document.getElementById('y').style.display = 'flex';
  document.getElementById('o').style.display = 'none';
});
