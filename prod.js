
let product = document.getElementById('products');
let fruits = document.getElementById('fruList');
let veggie = document.getElementById('vegList');

fetch("http://localhost:5000/products", {
    method: "GET",
    headers: {
        "content-type": "application/json",
    }
})
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        data.forEach(function (prdct) {
            let prod = document.createElement('li');
            prdct.innerText = `${prdct.name}`;
            product.appendChild(prod);
        })

    })
    .catch(err => {
        console.log(err);
    })


fetch("http://localhost:5000/products/fruits", {
    method: "GET",
    headers: {
        "content-type": "application/json",
    }
})
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        data.forEach(fruit => {
            let fru = document.createElement('li');
            fruit.innerText += `${fruits.name}`;
            fruits.appendChild(fru);
        })
    })
    .catch(err => {
        console.log(err);
    })


fetch("http://localhost:5000/products/vegetables", {
    method: "GET",
    headers: {
        "content-type": "application/json",
    }, // optional
})
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        data.forEach(vegg => {
            let veggi = document.createElement('li');
            vegg.innerText += `${vegg.name}`;
            veggie.appendChild(veggi)

            
        })
    })
    .catch(err => {
        console.log(err);
    })
