import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
}

interface ProductState {
  items: Product[];
  filteredItems: Product[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  selectedBrands: string[];
  priceRange: number[];
  searchQuery: string; 
}

const initialState: ProductState = {
  items: [],
  filteredItems: [],
  status: 'idle',
  error: null,
  selectedBrands: [],
  priceRange: [10, 599],
  searchQuery: '', 
};

// Async thunk to fetch products
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await axios.get('https://fakestoreapi.com/products');
  return response.data;
});

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // Reducer to handle brand selection
    toggleBrandFilter: (state, action: PayloadAction<string>) => {
      const brand = action.payload;
      if (state.selectedBrands.includes(brand)) {
        state.selectedBrands = state.selectedBrands.filter((b) => b !== brand);
      } else {
        state.selectedBrands.push(brand);
      }
      applyFilters(state); 
    },

    // Handle price range change
    setPriceRange: (state, action: PayloadAction<number[]>) => {
      state.priceRange = action.payload;
      applyFilters(state); 
    },

    // Handle search query change
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
      applyFilters(state); 
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
        state.status = "succeeded";
        state.items = action.payload;
        applyFilters(state); 
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || 'Failed to fetch products';
      });
  },
});

// Helper function to apply filters
const applyFilters = (state: ProductState) => {
  const { items, selectedBrands, priceRange, searchQuery } = state;

  let filtered = items;

  // Filter by selected brands
  if (selectedBrands.length > 0) {
    filtered = filtered.filter((product) =>
      selectedBrands.includes(product.category)
    );
  }

  // Filter by price range
  filtered = filtered.filter(
    (product) =>
      product.price >= priceRange[0] && product.price <= priceRange[1]
  );

  // Filter by search query (brand name or product name)
  if (searchQuery) {
    const lowerCaseQuery = searchQuery.toLowerCase();
    filtered = filtered.filter(
      (product) =>
        product.title.toLowerCase().includes(lowerCaseQuery) ||
        product.category.toLowerCase().includes(lowerCaseQuery)
    );
  }

  state.filteredItems = filtered;
};

export const { toggleBrandFilter, setPriceRange, setSearchQuery } = productSlice.actions;
export default productSlice.reducer;