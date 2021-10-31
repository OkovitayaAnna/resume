//update skills
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



//update work
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



//update school
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

//update hrefs
var hrefsA = document.getElementsByClassName('text');

for (let i = 0; i < hrefsA.length; i++) {
    hrefsA[i].addEventListener("blur", function () {
        var hrefsLS = JSON.parse(localStorage.getItem('hrefs'));
        var projects = JSON.parse(localStorage.getItem('projects'));

        var hrefsC = hrefsA[i].innerHTML;
        for (let a = 0; a < projects.length; a++) {
            if (projects[a][0] == hrefsA[i].parentElement.parentElement.children[0].getAttribute('src')) {
                var hrefsId = a;
            }
        }
        for (let l = 0; l < hrefsLS.length; l++) {
            if (l == hrefsId) {
                hrefsLS[l] = hrefsC;
            }
            createOrUpdate('hrefs', hrefsLS);
        }
    });
}
