// GreensKiosk.js
let products = [
    {
        name: 'Mangoes',
        category: 'fruits'
    },
    {
        name: 'Apples',
        category: 'fruits'
    },
    {
        name: 'Bananas',
        category: 'fruits'
    },
    {
        name: 'Oranges',
        category: 'fruits'
    },
    {
        name: 'Grapes',
        category: 'fruits'
    },
    {
        name: 'Kales',
        category: 'vegetables'
    },
    {
        name: 'Onions',
        category: 'vegetables'
    },
    {
        name: 'Tomatoes',
        category: 'vegetables'
    },
    {
        name: 'Cabbages',
        category: 'vegetables'
    },
    {
        name: 'Spinach',
        category: 'vegetables'
    },
];



// console.log(products);

function getItems(category) {
    if (category) {
        let filteredProducts = products.filter(item => {
            return item.category === category;
        });
        let  product = document.createElement('li')

        return filteredProducts.appendChild(product.document.createTextNode(category));
    } 
    else if (category === 'fruits') {
        let frut = document.getElementById('fruList');
        let fut = document.createElement('li');
        frut.appendChild(fut.document.createTextNode(name));
    }
    return products;


}

GreensKiosk = {
    getItems: getItems
};

module.exports = GreensKiosk;