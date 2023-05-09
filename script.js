'use strict'

async function getPlaceholderData() {
    const responce = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await responce.json();
    return data;
}

getPlaceholderData().then((value) => {
    printData(value);
});

function printData(array) {
    let cards = document.querySelector('.cards');
    array.forEach(elem => {
        cards.innerHTML += `<div class='card ${elem.id}'>
        <span class='number title'>Text №${elem.id}<br></span>
        <span class='title'>${elem.title}</span>
        <p class='text'>${elem.body}</p>
        </div>`
    });
}