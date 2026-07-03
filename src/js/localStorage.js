//localStorage.js

//retrieve data from local storage
export function getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

//save data to local storage
export function setLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}