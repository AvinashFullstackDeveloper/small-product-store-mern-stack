import express from "express";

import { createProduct, getProducts, updateProduct, deleteProduct } from "../controllers/product.controller.js";

const router = express.Router();

export default router;

router.get("/", getProducts)
router.post("/", createProduct);

router.put("/:id", updateProduct);


router.delete("/:id", deleteProduct);