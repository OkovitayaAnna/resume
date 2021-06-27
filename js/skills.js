//read
function read(key) {
    var value = JSON.parse(localStorage.getItem(key));
    return value;
}

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
