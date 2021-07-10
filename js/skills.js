//read
function read(key) {
    var value = JSON.parse(localStorage.getItem(key));
    return value;
}



function readText(theName, text, block, idOfBlock, classes) {
    var whatAdd = document.getElementById(`${theName}`);

    whatAdd.remove();
    var add = read(`${theName}`);

    if (add == null || add == undefined) {add = `${text}`}
    newBlock = document.createElement(block);
    newBlock.contentEditable = 'true';
    newBlock.id = theName;
    newBlock.className = classes;
    newBlock.innerHTML = `${add}`;
    document.getElementById(`${idOfBlock}`).append(newBlock);
}

readText('name', 'ФИО', 'h2', 'my-name', 'fio');
readText('hb', 'дата рождения', 'p', 'my-name', 'hb');
readText('sp', 'специальность', 'p', 'my-name', 'none-marging-and-padding');
readText('biography', 'немного биографии бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла', 'p', 'my-name', 'biography');
readText('phone', 'номер телефона', 'p', 'my-name', 'none-marging-and-padding');
readText('dop', 'дополнительно (логин в инстаграме, скайпе и т.д.)', 'p', 'my-name', 'none-marging-and-padding');
readText('email', 'почта', 'p', 'my-name', 'none-marging-and-padding');
readText('school-studing', 'Школа, годы', 'div', 'studing', 'school-studing');
readText('university', 'Университет, факультет, годы', 'div', 'studing', 'university');
readText('work-years', 'Опыт работы - ... в ...', 'div', 'work', 'work-years');
readText('f', 'название, немного информации по желанию', 'p', 'left');
readText('ff', '-----------------------------------------------', 'p', 'left', 'none');
readText('s', 'название, немного информации по желанию', 'p', 'left');
readText('ss', '-----------------------------------------------', 'p', 'right', 'none');
readText('th', 'название, немного информации по желанию', 'p', 'right');
readText('thth', '-----------------------------------------------', 'p', 'right', 'none');

whatAdd1 = document.getElementById('hb');
whatAdd1.addEventListener("blur", function () {
    res = whatAdd1.innerHTML;
    localStorage.setItem('hb', JSON.stringify(res));
});
whatAdd2 = document.getElementById('sp');
whatAdd2.addEventListener("blur", function () {
    res = whatAdd2.innerHTML;
    localStorage.setItem('sp', JSON.stringify(res));
});
whatAdd3 = document.getElementById('biography');
whatAdd3.addEventListener("blur", function () {
    res = whatAdd3.innerHTML;
    localStorage.setItem('biography', JSON.stringify(res));
});
whatAdd4 = document.getElementById('phone');
whatAdd4.addEventListener("blur", function () {
    res = whatAdd4.innerHTML;
    localStorage.setItem('phone', JSON.stringify(res));
});
whatAdd5 = document.getElementById('dop');
whatAdd5.addEventListener("blur", function () {
    res = whatAdd5.innerHTML;
    localStorage.setItem('dop', JSON.stringify(res));
});
whatAdd6 = document.getElementById('email');
whatAdd6.addEventListener("blur", function () {
    res = whatAdd6.innerHTML;
    localStorage.setItem('email', JSON.stringify(res));
});
whatAdd7 = document.getElementById('name');
whatAdd7.addEventListener("blur", function () {
    res = whatAdd7.innerHTML;
    localStorage.setItem('name', JSON.stringify(res));
});
whatAdd8 = document.getElementById('school-studing');
whatAdd8.addEventListener("blur", function () {
    res = whatAdd8.innerHTML;
    localStorage.setItem('school-studing', JSON.stringify(res));
});
whatAdd9 = document.getElementById('university');
whatAdd9.addEventListener("blur", function () {
    res = whatAdd9.innerHTML;
    localStorage.setItem('university', JSON.stringify(res));
});
whatAdd10 = document.getElementById('work-years');
whatAdd10.addEventListener("blur", function () {
    res = whatAdd10.innerHTML;
    localStorage.setItem('work-years', JSON.stringify(res));
});
whatAdd11 = document.getElementById('f');
whatAdd11.addEventListener("blur", function () {
    res = whatAdd11.innerHTML;
    localStorage.setItem('f', JSON.stringify(res));
});
whatAdd12 = document.getElementById('s');
whatAdd12.addEventListener("blur", function () {
    res = whatAdd12.innerHTML;
    localStorage.setItem('s', JSON.stringify(res));
});
whatAdd13 = document.getElementById('th');
whatAdd13.addEventListener("blur", function () {
    res = whatAdd13.innerHTML;
    localStorage.setItem('th', JSON.stringify(res));
});



var arr = read('skills');
if (arr) {
    arr.forEach(element => {
        newSkill = document.createElement('div');
        newSkill.innerHTML = `<div id="${element[0]}"> <dt class="programming-language">${element[0]}</dt> <dd> <div class="skills-level">${element[1]}%</div> </dd> <div>`;
        document.getElementById('dl').append(newSkill);

        include("js/skills.colors.js");
});
}


//create
var create = document.getElementById('crt');

create.addEventListener("click", function () {
    var skill = document.getElementById('skill-c').value;
    var prct = document.getElementById('percentage').value;
    var ob = read('skills');
    if (ob) {var obj = ob;} else {var obj = [];};
    var set = [skill, prct];

    obj.push(set);
    localStorage.setItem('skills', JSON.stringify(obj));

    newSkill = document.createElement('div');
    newSkill.innerHTML = `<div id="${skill}"> <dt class="programming-language">${skill}</dt> <dd> <div class="skills-level">${prct}%</div> </dd> <div>`;
    document.getElementById('dl').append(newSkill);

    include("js/skills.colors.js");
});


//delete
var dlt = document.getElementById('dlt');


dlt.addEventListener("click", function () {
    var sd = document.getElementById('skill-d').value;
    var remove = read('skills');
    var i = 0;

    remove.forEach(element => {
        if (element[0] == sd) {remove.splice(i, 1)};
        i++;

        localStorage.setItem('skills', JSON.stringify(remove));
    });

    document.getElementById(sd).remove();
    i = 0;
});


//update
var update = document.getElementById('updt');

update.addEventListener("click", function () {
    var skill = document.getElementById('skill-u').value;
    var updt = document.getElementById('update').value;
    var update = read('skills');

    update.forEach(element => {
        if (element[0] == skill) {element[1] = updt};

        localStorage.setItem('skills', JSON.stringify(update));
    });

    newSkill = document.createElement('div');
    newSkill.innerHTML = `<div  id="${skill}"> <dt class="programming-language">${skill}</dt> <dd> <div class="skills-level">${updt}%</div> </dd> </div>`;
    document.getElementById(skill).remove();
    document.getElementById('dl').append(newSkill);

    include("js/skills.colors.js");
});
