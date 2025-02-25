async function getProducts() {
    try {
        const response = await fetch('http://localhost:9000/products');
        if(response.ok){
            const products = await response.json();
            let data = '';
            products.forEach(product => {
                data += `<div class="card text-start p-3">
                            <img class="card-img-top w-50" src="/public/images/${product.image}" alt="${product.name}" />
                                <div class="card-body">
                                    <h4 class="card-title">${product.name}</h4>
                                    <p class="card-text">${product.price} Baht</p>
                                </div>
                                <button class="btn btn-primary" onclick="addProduct(${product.price})">Add to cart</button>
                        </div>`;
            });
            document.querySelector('#cardContainer').innerHTML = data;
        } else {
            throw Error('Bad response');
        }
    } catch (error) {
        console.error(err);
        alert('Server error, try again later!');
    }
}

let qrtProduct = 0;
let totalPrice = 0;

function addProduct(price) {
    qrtProduct++;
    totalPrice += price;
    document.querySelector('#qrtProduct').innerHTML = `Total product = ${qrtProduct}`;
    document.querySelector('#totalPrice').innerHTML = `Total price = ${totalPrice}`;
}


getProducts();
document.querySelector('#clear').onclick = function() {
    qrtProduct = 0;
    totalPrice = 0;
    document.querySelector('#qrtProduct').innerHTML = `Total product = ${qrtProduct}`;
    document.querySelector('#totalPrice').innerHTML = `Total price = ${totalPrice}`;
}