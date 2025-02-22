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
