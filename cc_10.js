// Task 1: Creating a  Product Class
// created a product class
class Product {
    constructor(name, id, price, stock) {
        this.name = name;
        this.id = id;
        this.price = price;
        this.stock = stock;
    }
    getDetails() {
        return `Product: ${this.name}, ID: ${this.id},
        Price: $${this.price}, Stock: ${this.stock}`; // formating a string of product details 
    }
    updateStock(quantity) {
        this.stock -=quantity; // modifies the stock level when orders are placed 
    }
}
const prod1 = new Product("Laptop", 101, 1200, 10); // created prod1
console.log(prod1.getDetails());// logged prod1
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 10"

prod1.updateStock(3); // updating the stock value of prod1
console.log(prod1.getDetails()); // logged the new stock value 
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 7"

// Task 2: Creating an Order Class 
// created a class for orders 
class Order {
    constructor(orderId, product, quantity) {
        this.orderId = orderId;
        this.product = product;
        this.quantity = quantity;
        this.product.updateStock(this.quantity); // reduces the stock when orders are placed 
    }
    getOrderDetails() {
        const totalPrice = this.product.price * this.quantity; // calculate the total price of the order 
        return `Order ID: ${this.orderId}, Product: ${this.product.name}, 
        Quantity: ${this.quantity}, Total Price: $${totalPrice}`; // formatted a string of order details 
    }
}
const order1 = new Order(501, prod1, 2);
console.log(order1.getOrderDetails()); 
// Expected output: "Order ID: 501, Product: Laptop, Quantity: 2, Total Price: $2400"

console.log(prod1.getDetails()); 
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 5" (Stock reduced)
