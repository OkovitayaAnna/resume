var skillsLevels = document.getElementsByClassName('skills-level');
for (var i = 0; i != skillsLevels.length; i++) {
    var skillElement = skillsLevels[i];
    var text = skillElement.innerHTML;
    if (text.length) {
        text = text.replace("%","");
    }
    if (text<=20){
        skillElement.style = 'background-color: #661a00';
    }
    if (text<=40 && text>20){
        skillElement.style = 'background-color: #cc3300';
    }
    if (text<=60 && text>40){
        skillElement.style = 'background-color: #ff6633';
    }
    if (text<=80 && text>60){
        skillElement.style = 'background-color: #ffb399';
    }
    if (text<=100 && text>80){
        skillElement.style = 'background-color: #ffece6';
    }
}

document.getElementById('crt').addEventListener('click', () => {
    
})

document.getElementById('updt').addEventListener('click', () => {
    
})
