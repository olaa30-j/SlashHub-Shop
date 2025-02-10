"use client";

import React, { useEffect, useState } from 'react';
import ContactBanner from '@/components/shared/ContactBanner';
import ProductCard from '@/components/protected-routes/product/ProductCard';
import FilterWidget from '@/components/widgets/FilterWidget';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { fetchProducts } from '@/store/reducers/productsSlice';

const Page = () => {
  const dispatch = useAppDispatch();
  const { filteredItems, status, error } = useAppSelector((state) => state.products);
  const [categories, setCategories] = useState<string[]>([]);
  const [categoriesLoading, setCategoriesLoading] = useState(true);
  const [categoriesError, setCategoriesError] = useState<string | null>(null);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/categories');
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Failed to fetch categories:', error);
        setCategoriesError('Failed to fetch categories');
      } finally {
        setCategoriesLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (status === 'loading' || categoriesLoading) return <div>Loading...</div>;
  if (status === 'failed') return <div>Error: {error}</div>;
  if (categoriesError) return <div>Error: {categoriesError}</div>;

  return (
    <div>
      <div>
        <ContactBanner />
      </div>

      <div className="flex flex-col md:flex-row w-full max-w-[1230px] mx-auto my-[15px] p-[15px] gap-6">
        <aside className="w-full md:w-1/4">
          <FilterWidget brands={categories} />
        </aside>

        <div className="w-full md:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
          {filteredItems.map((product) => (
            <div key={product.id}><ProductCard product={product} /></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;