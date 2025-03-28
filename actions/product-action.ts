"use server";

import { URL } from "@/lib/utils";
import { Product } from "@/validation/product-validation";



export const getAllProducts = async (): Promise<Product[] | null> => {
  try {
    const res = await fetch(`${URL}/products`, { cache: "no-cache" });
    
    if (!res.ok) {
      throw new Error(`Failed to fetch products: ${res.status}`);
    }
    
    const products: Product[] = await res.json();
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return null; 
  }
};
