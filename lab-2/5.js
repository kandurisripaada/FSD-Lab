const product = { id: 101, name: 'Laptop', price: 1000, category: 'Electronics' };

const { id, name } = product;
const updatedProduct = { ...{ id, name }, discount: 10, inStock: true };

console.log(updatedProduct);
