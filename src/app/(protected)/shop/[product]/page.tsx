"use client";

import React, { useState, useEffect } from "react";
import ProductDetails from "@/components/protected-routes/product/ProductDetails";
import { getProductDetails } from "@/app/api/getProduct";
import { Product } from "@/store/reducers/productsSlice";

interface PageProps {
  params: Promise<{ product: string }>; 
}

const Page: React.FC<PageProps> = ({ params }) => {
  const { product } = React.use(params);  

  const [productData, setProductData] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProductDetails = async () => {
      setLoading(true);
      try {
        const productData = await getProductDetails(product);
        setProductData(productData);
      } catch {
        setProductData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [product]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!productData) {
    return <div>Product not found or failed to load.</div>;
  }

  return (
    <div className="bg-bannerColor p-1">
      <ProductDetails product={productData} />
    </div>
  );
};

export default Page;
