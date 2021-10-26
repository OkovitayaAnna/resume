function isAvailableSkills(prct) {
    var adding = true;
    if (prct<5 || prct>100) {
        document.getElementById('not-available').style.display = 'block';
        adding = false;
    } else {
        document.getElementById('not-available').style.display = 'none';
    }
    return adding;
}