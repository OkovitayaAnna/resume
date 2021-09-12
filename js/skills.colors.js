var skillsLevels = document.getElementsByClassName('skills-level');
for (var i = 0; i != skillsLevels.length; i++) {
    var skillElement = skillsLevels[i];
    var text = skillElement.innerHTML;

    if (text.length) {
        text = text.replace("%","");
    }
    if (text<=20){
        skillElement.style = 'background-color: #808080; width: ' + text + '%;';
    }
    if (text<=40 && text>20){
        skillElement.style = 'background-color: #737373; width: ' + text + '%;';
    }
    if (text<=60 && text>40){
        skillElement.style = 'background-color: #666666; width: ' + text + '%;';
    }
    if (text<=80 && text>60){
        skillElement.style = 'background-color: #595959; width: ' + text + '%;';
    }
    if (text<=100 && text>80){
        skillElement.style = 'background-color: #4d4d4d; width: ' + text + '%;';
    }
    skillElement.animate([{width: '5%'}, {width: `${text}`}], 3000);
    skillElement.addEventListener("mouseover", function() {
        this.animate([{width: '5%'}, {width: `${text}`}], 3000);
    })
}
