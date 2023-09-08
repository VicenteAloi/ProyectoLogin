import { Request, Response } from "express"
import { Product } from "../models/product";


export const getProducts = async (req: Request, res: Response) => {
  const listProductos = await Product.findAll();
  res.json(listProductos)
};