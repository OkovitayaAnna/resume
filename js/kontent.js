data = [{
    "name": "Оковита Анна Андріївна",
    "hb": "",
    "sp": "учениця 9 класу",
    "biography": "Харківського навчально-виховного комплексу № 45 «Академічна гімназія»",
    "phone": "",
    "dop": "Науковий керівник: Руккас Кирило Маркович,  професор кафедри теоретичної та прикладної інформатики механіко-математичного факультету Харківського національного університету ім.В.Н.Каразіна,  доктор технічних наук, доцент",
    "email": "",
    "work": [["2017-2018","Академическая гимназия №45","LogoWriter"],["2018-2020","Академическая гимназия №45","Pascal"],["2020-2021","Академическая гимназия №45, Qbit","C++, js, html, css"]],
    "school": [["2017-2018","Академическая гимназия №45","5 класс"],["2018-2019","Академическая гимназия №45","6 класс"],["2019-2020","Академическая гимназия №45","7 класс"],["2020-2021","Академическая гимназия №45","8 класс"],["2021...","Академическая гимназия №45","9 класс"]],
    "skills": [["HTML","80"],["Pascal","70"],["CSS","60"],["JS","50"],["C++","30"]],
    "avatar": "images/my-avatar.jpg",
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