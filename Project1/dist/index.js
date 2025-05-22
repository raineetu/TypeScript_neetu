"use strict";
const getUserName = document.querySelector('#user');
const formSubmit = document.querySelector(".form");
const main_container = document.querySelector(".main-container");
//resuable function
async function myCustomFetcher(url, options) {
    const response = await fetch(url, options);
    if (!response.ok) {
        throw new Error(`Network response was not ok,${response.status}`);
    }
    const data = response.json();
    return data;
}
function fetchUserData(url) {
    myCustomFetcher(url, {});
}
//default function call
fetchUserData("https://api.github.com/users");
