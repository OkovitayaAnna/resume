data = [{
    "name": "Иванова Ольга Сергеевна",
    "hb": "25.10.1990",
    "sp": "Веб-разработчик",
    "biography": "Разработка для меня - это и работа, и хобби, поэтому даже в нерабочее время я занимаюсь разработкой.",
    "phone": "+380(66)9902313",
    "dop": "skype: live:26ck4587v64n0ch3",
    "email": "ivanova.olga@gmail.com",
    "work": [["2015-2021","?","?"],["2011-2015","Epam","?"]],
    "school": [["2007-2012","?","?"],["1996-2007","?","?"]],
    "skills": [["HTML","80"],["CSS","60"],["JS","55"]],
    "avatar": "images/avatar.jpg",
    "diploms": [["images/diplom1.jpg"],["images/diplom2.jpg"],["images/diplom3.jpg"],["images/diplom4.jpg"]],
    "projects": [["images/it-project1.jpg"],["images/it-project2.png"],["images/it-project3.png"]]
}];

var resume = localStorage.getItem('resume');
if (resume == false || !resume) {
    var dataOb = data[0];
    for (key in dataOb) {
        if (key == "avatar") {
            localStorage.setItem(key,dataOb[key]);
        } else {
            localStorage.setItem(key,JSON.stringify(dataOb[key]));
        }
    }
    var hrefsLS = ["https://www.google.com", "https://www.google.com", "https://www.google.com"];
    localStorage.setItem('hrefs', JSON.stringify(hrefsLS));
    localStorage.setItem('resume', true);
}