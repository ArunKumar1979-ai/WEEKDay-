// Makes this file a module so type names don't clash with other files in the project
export {};

// 2. Union type - allowed status values
type ProductStatus = "In Stock" | "Out of Stock" | "Discontinued";

// 1. Type Alias - Product (status uses the ProductStatus union type)
type Product = {
    id: number,
    name: string,
    price: number,
    category: string,
    status: ProductStatus
};

// 3. Create a new Product object
let product1: Product = {
    id: 1,
    name: "Laptop",
    price: 65000,
    category: "Electronics",
    status: "In Stock"
};

console.log("Product object with Union type:");
console.log(product1);

// 4. Objects with each possible status value
let product2: Product = {
    id: 2,
    name: "Laptop",
    price: 65000,
    category: "Electronics",
    status: "Out of Stock"
};

let product3: Product = {
    id: 3,
    name: "Laptop",
    price: 65000,
    category: "Electronics",
    status: "Discontinued"
};

console.log("\nObjects with each status value:");
console.log("Status:", product1.status);
console.log("Status:", product2.status);
console.log("Status:", product3.status);

// 5. Two separate type aliases
type ProductDetails = {
    id: number,
    name: string,
    price: number,
    status: ProductStatus
};

type InventoryDetails = {
    quantity: number,
    location: string
};

// 6. Intersection type - combines ProductDetails and InventoryDetails
type ProductInfo = ProductDetails & InventoryDetails;

// 7. Create a ProductInfo object and print all the properties
let productInfo: ProductInfo = {
    id: 2,
    name: "Mobile Phone",
    price: 25000,
    status: "In Stock",
    quantity: 50,
    location: "Chennai"
};

console.log("\nProductInfo object using Intersection type:");
console.log(productInfo);

// 8. Update price and quantity values
productInfo.price = 28000;
productInfo.quantity = 45;

console.log("\nUpdate price and quantity:");
console.log("price:", productInfo.price);
console.log("quantity:", productInfo.quantity);

console.log("\nUpdated ProductInfo object:");
console.log(productInfo);