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



var arr = read('skills');
if (arr) {
    arr.forEach(element => {
        newSkill = document.createElement('div');
        newSkill.innerHTML = `<div id="${element[0]}" class="skill"> <dt class="programming-language"> <button class="dlt btn"> × </button> <p class="skillLanguage">${element[0]}</p></dt> <dd class="prct"> <div class="skills-level" contentEditable=true>${element[1]}%</div> </dd> <div>`;
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
    createOrUpdate('skills', obj);

    newSkill = document.createElement('div');
    newSkill.innerHTML = `<div id="${skill}" class="skill"> <dt class="programming-language"> <button class="dlt btn"> × </button> <p class="skillLanguage">${skill}</p></dt> <dd class="prct"> <div class="skills-level" contentEditable=true>${prct}%</div> </dd> </div>`;
    document.getElementById('dl').append(newSkill);

    var dltButton = document.getElementById(skill).children[0].children[0];
    addDeleteSkillsListener(dltButton);
    addColorForBtn();

    include("js/skills.colors.js");
});


//delete
var dlt = document.getElementsByClassName('dlt');

for (let l = 0; l < dlt.length; l++) {
    addDeleteSkillsListener(dlt[l]);
}

function addDeleteSkillsListener(dltButton) {
    dltButton.addEventListener("click", function () {
        var el = dltButton.parentElement.parentElement;
        var sd = el.id;
        var remove = read('skills');

        deleteThis(0, remove, sd, 'skills', el);
    });   
}

//update
var skills = document.getElementsByClassName('skills-level');

for (let a = 0; a < skills.length; a++) {
    skills[a].addEventListener("blur", function () {
        var skill = skills[a].parentElement.parentElement.children[0].children[1].innerHTML;
        var prct = skills[a];
        var update = read('skills');

        update.forEach(element => {
            if (element[0] == skill) {element[1] = prct.innerHTML.replace('%', '')};
    
            createOrUpdate('skills', update);
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
    createOrUpdate('work', workObj);

    newWorkExperience = document.createElement('div');
    newWorkExperience.innerHTML = `<div class="workExp"> <button class="dltWork btn"> × </button> <div class="${company} workingExperience" id="${company}"> <p class="year" contentEditable=true> ${year} </p> <p class="comp"> ${company} </p> <p class="position"> ${position} </p> </div> </div>`;
    document.getElementById('workExperience').append(newWorkExperience);

    var dltWork = document.getElementById(company).parentElement.children[0];
    addDeleteWorkListener(dltWork);
    addColorForBtn();
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
    addDeleteWorkListener(dltWork[t]);
}

function addDeleteWorkListener(dltButton) {
    dltButton.addEventListener("click", function () {
        var elementForDlt = dltButton.nextElementSibling;
        var idOfThis = elementForDlt.id;

        work = read('work');
        deleteThis(1, work, idOfThis, 'work', elementForDlt);
        this.remove();
    })
}

var years = document.getElementsByClassName('year');

for (let b = 0; b < years.length; b++) {
    years[b].addEventListener("blur", function () {
        work = read('work');
        year = years[b].innerHTML;
        id = years[b].parentElement.id;

        work.forEach(element => {
            if (element[1] == id) {element[0] = year};
    
            createOrUpdate('work', work);
        });
    });
}



var school = read('school');

var createSchool = document.getElementById('crtSchool');

createSchool.addEventListener("click", function () {
    var yearS = document.getElementById('yearS').value;
    var school = document.getElementById('school').value;
    var grades = document.getElementById('grades').value;
    var schoolArr = read('school');
    if (schoolArr) {var schoolObj = schoolArr;} else {var schoolObj = [];};
    var setSchool = [yearS, school, grades];

    schoolObj.push(setSchool);
    createOrUpdate('school', schoolObj);

    newSchoolExperience = document.createElement('div');
    newSchoolExperience.innerHTML = `<div class="schoolExp"> <button class="dltSchool btn"> × </button> <div class="${school} schoolExperience" id="${school}"> <p class="yearS" contentEditable=true> ${yearS} </p> <p class="school"> ${school} </p> <p class="grades"> ${grades} </p> </div> </div>`;
    document.getElementById('schoolExperience').append(newSchoolExperience);

    var dltSchool = document.getElementById(school).parentElement.children[0];
    addDeleteSchoolListener(dltSchool);
    addColorForBtn();
});



if (school) {
    school.forEach(element => {
        newSchoolExperience = document.createElement('div');
        newSchoolExperience.innerHTML = `<div class="schoolExp"> <button class="dltSchool btn"> × </button> <div class="${element[1]} schoolExperience" id="${element[1]}"> <p class="yearS" contentEditable=true> ${element[0]} </p> <p class="school"> ${element[1]} </p> <p class="grades"> ${element[2]} </p> </div> </div>`;
        document.getElementById('schoolExperience').append(newSchoolExperience);
});
}

var dltSchool = document.getElementsByClassName('dltSchool');

for (let t = 0; t < dltSchool.length; t++) {
    addDeleteSchoolListener(dltSchool[t]);
}

function addDeleteSchoolListener(dltButton) {
    dltButton.addEventListener("click", function () {
        var elementForDlt = dltButton.nextElementSibling;
        var idOfThis = elementForDlt.id;

        school = read('school');
        deleteThis(1, school, idOfThis, 'school', elementForDlt);
        this.remove();
    });
}

var yearsS = document.getElementsByClassName('yearS');

for (let b = 0; b < yearsS.length; b++) {
    yearsS[b].addEventListener("blur", function () {
        school = read('school');
        yearS = yearsS[b].innerHTML;
        id = yearsS[b].parentElement.id;

        school.forEach(element => {
            if (element[1] == id) {element[0] = yearS};
    
            createOrUpdate('school', school);
        });
    });
}

