// Task 1

let products = [
    { name: "Laptop", price: 1200, category: "Electronics" },
    { name: "Phone", price: 800, category: "Electronics" },
    { name: "Desk Chair", price: 150, category: "Furniture" },
    { name: "Notebook", price: 5, category: "Stationery" },
    { name: "Headphones", price: 100, category: "Electronics" }
];

function getProductsbyCategory(products, cataegory) {
    products.filter(product => product.category === cataegory);
}

console.log(getProductsbyCategory(products, 'Electronics'));

