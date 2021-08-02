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



var arr = read('skills');
if (arr) {
    arr.forEach(element => {
        newSkill = document.createElement('div');
        newSkill.innerHTML = `<div id="${element[0]}" class="skill"> <dt class="programming-language"> <button class="dlt btn"> × </button> ${element[0]}</dt> <dd> <div class="skills-level" contentEditable=true>${element[1]}%</div> </dd> <div>`;
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
    newSkill.innerHTML = `<div id="${skill}" class="skill"> <dt class="programming-language"> <button class="dlt btn"> × </button> ${skill}</dt> <dd> <div class="skills-level" contentEditable=true>${prct}%</div> </dd> </div>`;
    document.getElementById('dl').append(newSkill);

    include("js/skills.colors.js");
    location.reload();
});


//delete
var dlt = document.getElementsByClassName('dlt');

for (let l = 0; l < dlt.length; l++) {
    dlt[l].addEventListener("click", function () {
        var el = dlt[l].parentElement.parentElement;
        var sd = el.id;
        var remove = read('skills');
        var i = 0;
    
        remove.forEach(element => {
            if (element[0] == sd) {remove.splice(i, 1)};
            i++;
    
            localStorage.setItem('skills', JSON.stringify(remove));
        });
    
        el.remove();
        i = 0;
        location.reload();
    });
}


//update
var skills = document.getElementsByClassName('skills-level');

for (let a = 0; a < skills.length; a++) {
    skills[a].addEventListener("blur", function () {
        var skill = skills[a].parentElement.parentElement.children[0].innerHTML.replace(' <button class="dlt btn"> × </button> ', '');
        var prct = skills[a];
        var update = read('skills');

        update.forEach(element => {
            if (element[0] == skill) {element[1] = prct.innerHTML.replace('%', '')};
    
            localStorage.setItem('skills', JSON.stringify(update));
        });

        prct.style.width = prct.innerHTML.replace('%', '');
        include("js/skills.colors.js");
    });
}



var work = read('work');

var createWork = document.getElementById('crtWork');

createWork.addEventListener("click", function () {
    var year = document.getElementById('year').value;
    var company = document.getElementById('company').value;
    var position = document.getElementById('position').value;
    var workArr = read('work');
    if (workArr) {var workObj = workArr;} else {var workObj = [];};
    var setWork = [year, company, position];

    workObj.push(setWork);
    localStorage.setItem('work', JSON.stringify(workObj));

    newWorkExperience = document.createElement('div');
    newWorkExperience.innerHTML = `<div class="workExp"> <button class="dltWork btn"> × </button> <div class="${company} workingExperience" id="${company}"> <p class="year" contentEditable=true> ${year} </p> <p class="comp"> ${company} </p> <p class="position"> ${position} </p> </div> </div>`;
    document.getElementById('workExperience').append(newWorkExperience);

    location.reload();
});



if (work) {
    work.forEach(element => {
        newWorkExperience = document.createElement('div');
        newWorkExperience.innerHTML = `<div class="workExp"> <button class="dltWork btn"> × </button> <div class="${element[1]} workingExperience" id="${element[1]}"> <p class="year" contentEditable=true> ${element[0]} </p> <p class="comp"> ${element[1]} </p> <p class="position"> ${element[2]} </p> </div> </div>`;
        document.getElementById('workExperience').append(newWorkExperience);
});
}

var dltWork = document.getElementsByClassName('dltWork');

for (let t = 0; t < dltWork.length; t++) {
    dltWork[t].addEventListener("click", function () {
        var elementForDlt = dltWork[t].nextElementSibling;
        var idOfThis = elementForDlt.id;

        work = read('work');
        i = 0;

        work.forEach(element => {
            if (element[1] == idOfThis) {work.splice(i, 1)};
            i++;
    
            localStorage.setItem('work', JSON.stringify(work));
        });

        elementForDlt.remove();
        i = 0;
        location.reload();
    });
}

var years = document.getElementsByClassName('year');

for (let b = 0; b < years.length; b++) {
    years[b].addEventListener("blur", function () {
        work = read('work');
        year = years[b].innerHTML;
        id = years[b].parentElement.id;

        work.forEach(element => {
            if (element[1] == id) {element[0] = year};
    
            localStorage.setItem('work', JSON.stringify(work));
        });
    });
}
