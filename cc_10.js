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

// Task 3: Creating a Inventory Class 
class Inventory{
    constructor() {
        this.products = []; // inititalize product array 
        this.orders = []; // task 4 add orders to inventory class 
    }
    addProduct(product) {
        this.products.push(product); // adds new product to inventory 
    }
    listProducts() {
        return this.products.forEach(product => {console.log(product.getDetails()); // log product details 

        });
    }
    // Task 4 
    // created a new order 
    // added it to order array 
    placeOrder(orderId, product, quantity) {
        if(product.stock >= quantity) {
            let order = new Order(orderId, product, quantity);
        } else {
            return `Insufficient stock for product: ${product.name}`;
        }
    }
    listOrders() {
        this.orders.forEach(order => console.log(order.getOrderDetails())); // log order details 
    }
    // Task 5 Implementing Product Restocking 
    restockProduct(productId, quantity) {
        let product = this.products.find(product => product.id === productId);
        if(product) {
            product.stock += quantity;
        }
    }
}
const inventory = new Inventory();
inventory.addProduct(prod1);
inventory.listProducts();
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 5"

// Task 4: Implementing Order Management 
inventory.placeOrder(601, prod1, 2);
inventory.listOrders();
// Expected output: "Order ID: 601, Product: Laptop, Quantity: 2, Total Price: $2400"
console.log(prod1.getDetails());
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 3"
// Task 5 
inventory.restockProduct(101, 5);
console.log(prod1.getDetails()); 
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 8"