"use client";

import { useState, useEffect } from "react";
import ProductDetails from "@/app/_component/ProductDetails";
import { getProductDetails } from "@/app/_lib/getProduct";
import { Product } from "@/app/_store/reducers/productsSlice";

const Page = ({ params }: { params: { product: string } }) => {
  console.log( params);
  
  const [product, setProduct] = useState<Product | null>(null); 
  const [loading, setLoading] = useState<boolean>(true);


  useEffect(() => {
    const fetchProductDetails = async () => {
      setLoading(true);
      try {
        const productData = await getProductDetails(params.product);
        setProduct(productData);
      } catch {
        setProduct(null); 
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [params.product]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found or failed to load.</div>;
  }

  return (
    <div className="bg-bannerColor p-1">
      <ProductDetails product={product} />
    </div>
);
};

export default Page;
