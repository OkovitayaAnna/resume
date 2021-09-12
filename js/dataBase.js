//read
function read(key) {
    var value = JSON.parse(localStorage.getItem(key));
    return value;
}

//create or update
function createOrUpdate(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

//delete
function deleteThis(id, array, whatDelete, key, elementForDlt) {
    var i = 0;

    array.forEach(element => {
        if (element[id] == whatDelete) {array.splice(i, 1)};
        i++;
    
        localStorage.setItem(key, JSON.stringify(array));
    });

    elementForDlt.remove();
    i = 0;
}
