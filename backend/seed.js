// this is to seed the database
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Product from "./models/product.model.js";

dotenv.config();
connectDB();

const seedProducts = async () => {
  try {
    await Product.deleteMany();
    console.log("Products deleted");

    const products = [
      {
        name: "Samsung Smart Watch",
        price: 235,
        image:
          "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "This is product 1",
      },
      {
        name: "iPhone XR",
        price: 799,
        image:
          "https://images.unsplash.com/photo-1596558450268-9c27524ba856?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "This is product 2",
      },
      {
        name: "Airpods Pro",
        price: 244,
        image:
          "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "This is product 1",
      },
      {
        name: "Laptop",
        price: 600,
        image:
          "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "This is product 2",
      },
      {
        name: "Mechanical Keyboard",
        price: 250,
        image:
          "https://images.unsplash.com/photo-1716117690903-9ed5fb8a701b?q=80&w=947&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "This is product 2",
      },
      {
        name: "Apple Mouse",
        price: 600,
        image:
          "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "This is product 2",
      },
      // Add more products here...
    ];

    const createdProducts = await Product.insertMany(products);
    console.log("Products added");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

seedProducts();
