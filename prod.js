
let product = document.getElementById('products');
let fruits = document.getElementById('fruList');
let veggie = document.getElementById('vegList');

fetch("http://localhost:5000/products")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        data.forEach(function (prdct) {
            prdct.innerHTML += `<li>${product.name}</li>`;
        })

    })
    .catch(err => {
        console.log(err);
    })


fetch("http://localhost:5000/products/fruits")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        data.forEach(fruit => {
            fruit.innerHTML += `<li>${fruits.name}</li>`;
        })
    })
    .catch(err => {
        console.log(err);
    })


    fetch("http://localhost:5000/products/vegetables")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        data.forEach(vegg => {
            vegg.innerHTML += `<li>${veggie.name}</li>`;
        })
    })
    .catch(err => {
        console.log(err);
    })
