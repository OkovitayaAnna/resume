//delete
var dlt = document.getElementById('dlt');


dlt.addEventListener("click", function () {
    var sd = document.getElementById('skill-d').value;

    localStorage.removeItem(sd);
    document.getElementById(sd).remove();
});


//create
var create = document.getElementById('crt');

create.addEventListener("click", function () {
    var skill = document.getElementById('skill-c').value;
    var prct = document.getElementById('percentage').value;

    localStorage.setItem(skill, prct);
    newSkill = document.createElement('div');
    newSkill.innerHTML = `<div id="${skill}"> <dt class="programming-language">${skill}</dt> <dd> <div class="skills-level">${prct}%</div> </dd> <div>`;
    document.getElementById('dl').append(newSkill);

    include("js/skills.colors.js");
});


//update
var update = document.getElementById('updt');

update.addEventListener("click", function () {
    var skill = document.getElementById('skill-u').value;
    var updt = document.getElementById('update').value;

    localStorage.setItem(skill, updt);
    newSkill = document.createElement('div');
    newSkill.innerHTML = `<div  id="${skill}"> <dt class="programming-language">${skill}</dt> <dd> <div class="skills-level">${updt}%</div> </dd> </div>`;
    document.getElementById(skill).remove();
    document.getElementById('dl').append(newSkill);

    include("js/skills.colors.js");
});
