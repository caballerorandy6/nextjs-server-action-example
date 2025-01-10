"use server";

import { randomUUID } from "crypto";
import { Product } from "@/lib/interfaces";

export const createProduct = async (product: Product) => {
  if (!product) return; // Si no hay producto, no hace nada

  const newProduct = { ...product, id: randomUUID() }; // El ID se genera aquí
  console.log(newProduct);

  return newProduct; // Devuelve el producto creado con el ID
};
