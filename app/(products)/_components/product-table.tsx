
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Edit, Trash } from "lucide-react";
import { ProductForm } from "./product-form";
import { getAllProducts } from "@/actions/product-action";

export default async function ProductTable() {
  const products = await getAllProducts();
  //   const products: Product[] = [
  //     {
  //       name: "dsaf",
  //       description: "dvdv",
  //       quantity: 1,
  //       price: 1,
  //     },
  //   ];
  return (
    <>
      <div className="flex justify-end">
        <ProductForm />
      </div>
      <div className="space-y-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products &&
              products?.length > 0 &&
              products?.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.quantity}</TableCell>
                  <TableCell>${product.price.toFixed(2)}</TableCell>
                  <TableCell>{product.description}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Edit className="w-4 h-4"  size={'sm'}/>
                      <Trash className="w-4 h-4" size={'sm'} />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
