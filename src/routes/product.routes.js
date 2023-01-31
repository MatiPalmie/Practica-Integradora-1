import productDao from "../daos/dbManager/productManagerDb.js";
import { Router } from "express";

const router = Router();

router.get("/products", async (req, res) => {
  try {
    let productList = await productDao.getProducts();
    let { limit } = req.query;
    if (limit === undefined) {
      res.status(200).json(productList);
      console.log("productos devueltos");
    } else {
      let limitedList = productList.slice(0, limit);
      res.status(200).json(limitedList);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.get("/products/:pid", async (req, res) => {
  try {
    let id = parseInt(req.params.pid);
    let product = await productDao.getProductById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/products", async (req, res) => {
  try {
    await productDao.addProduct(req.body);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put("/products/:pid"),
  async (req, res) => {
    try {
      let id = parseInt(req.params.pid);
      await productDao.updateProduct(pid, req.body);
    } catch {
      res.status(500).json({ error: error.message });
    }
  };
router.delete("/product/:pid"),
  async (req, res) => {
    try {
      let id = parseInt(req.params.pid);
      await productDao.deleteProduct(id);
    } catch {
      res.status(500).json({ error: error.message });
    }
  };
