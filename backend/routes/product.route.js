import express from "express";
import mongoose from 'mongoose';
import Product from '../models/product.model.js';
import { createProduct, getProducts } from "../controllers/product.controller.js";

const router = express.Router();

export default router;

router.get("/", getProducts)
router.post("/", createProduct);

router.put("/:id", async (req,res) => {
    const {id}= req.params;
    const product = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false,message:"Invalid Product Id"});
    }

    try{
        const updatedProduct= await Product.findByIdAndUpdate(id,product,{new:true});
        res.status(200).json({success:true, data:updatedProduct});
    }catch(error){
        res.status(500).json({success:false, message:"Server Error !!"});
    }
})


// app.listen(5000, ()=> {
//     console.log("Server started at http://localhost:5000 avinash");
// });

router.delete("/:id", async (req,res) => {
    const {id} =req.params;

    try{
        await Product.findByIdAndDelete(id);
        res.status(200).json({success:true, message: "Product Deleted !!"});
    }catch(error){
        res.status(404).json({success:false, message: "Product not found !!"})
    }
});