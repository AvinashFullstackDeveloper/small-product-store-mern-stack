import express from "express";
import dotenv from "dotenv";
import { connectDB } from './config/db.js';
import Product from './models/product.model.js'

dotenv.config();

const app = express();

app.use(express.json()); //allows us to accept JSON data in the req.body

app.post("/api/products", async (req,res) => {
    const product= req.body; //user will send htis data

    if(!product.name || !product.price || !product.image){
        return res.status(400).json({success: false, message: "Please provide al fields"});
    }

    const newProduct = new Product(product);

    try{
        await newProduct.save();
        res.status(201).json({success: true, data:newProduct});
    } catch(error){
        console.error("Error in Create product:", error.message);
        res.status(500).json({success: false,message: "Server Error"});
    }
});

console.log(process.env.MONGO_URI)

// app.listen(5000, ()=> {
//     console.log("Server started at http://localhost:5000 avinash");
// });

app.delete("/api/products/:id", async (req,res) => {
    const {id} =req.params;
    console.log("id:",id);
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    connectDB();
    console.log(`Server running on port ${PORT} Avinash`)
});
