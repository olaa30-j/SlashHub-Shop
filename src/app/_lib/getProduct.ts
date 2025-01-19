import axios, { AxiosError } from "axios";
import { Product } from "../_store/reducers/productsSlice";

export async function getProductDetails(product: string): Promise<Product> {
    console.log(product);
    
  try {
    const response = await axios.get(`https://fakestoreapi.com/products/${product}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || error.message || "An error occurred.");
    } else {
      throw new Error("An unexpected error occurred.");
    }
  }
}
