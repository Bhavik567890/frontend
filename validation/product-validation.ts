import * as z from "zod";

// Define the product schema with Zod 
export const productSchema = z.object({
  name: z.string().min(1, "Name is required"),
  quantity: z.number().min(0, "Quantity must be positive"),
  price: z.number().min(0, "Price must be positive"),
  description: z.string().min(1, "Description is required"),
});

export type Product = z.infer<typeof productSchema> & { id?: number };