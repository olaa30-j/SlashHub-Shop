"use client";
import React from 'react';
import {
  Box,
  Typography,
  Checkbox,
  FormControlLabel,
  Slider,
  Button,
  List,
  ListItem,
  Divider,
  TextField,
} from '@mui/material';
import { useAppDispatch, useAppSelector } from '@/app/_store/store';
import { toggleBrandFilter, setPriceRange, setSearchQuery } from '@/app/_store/reducers/productsSlice';

interface CategoryData {
  brands: string[];
}

const FilterWidget: React.FC<CategoryData> = ({ brands }) => {
  const dispatch = useAppDispatch();
  const priceRange = useAppSelector((state) => state.products.priceRange);
  const searchQuery = useAppSelector((state) => state.products.searchQuery);

  // Handle price range change
  const handlePriceChange = (event: Event, newValue: number | number[]) => {
    dispatch(setPriceRange(newValue as number[]));
  };

  // Handle brand selection
  const handleBrandChange = (brand: string) => {
    dispatch(toggleBrandFilter(brand));
  };

  // Handle search query change
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(event.target.value));
  };

  return (
    <Box sx={{ backgroundColor: 'var(--banner-color)', padding: '36px 38px 48px 30px', borderRadius: '4px', width: "100%" }}>
      {/* Search Box */}
      <TextField
        fullWidth
        placeholder="Search by brand or product name..."
        value={searchQuery}
        onChange={handleSearchChange}
        sx={{
          mb: 3,
          "& .MuiOutlinedInput-root": {
            "&:hover fieldset": {
              borderColor: "var(--main-color)",
            },
            "&.Mui-focused fieldset": {
              borderColor: "var(--main-color)",
            },
          },
        }}
      />

      {/* Filter by Brands */}
      <Typography variant="h6" gutterBottom className='text-textBlack'>
        FILTER
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Filter by Brands
      </Typography>
      <List sx={{ padding: 0 }}>
        {brands.map((brand, index) => {
          const randomNumber = Math.floor(Math.random() * 11);
          return (
            <ListItem key={`${index}`} sx={{ padding: 0 }}>
              <FormControlLabel
                control={
                  <Checkbox
                    id={`${index}`}
                    onChange={() => handleBrandChange(brand)}
                    sx={{
                      padding: '2px',
                      color: 'var(--border-color)',
                      '&.Mui-checked': {
                        color: 'var(--main-color)',
                      },
                    }}
                  />
                }
                label={
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                    <Typography variant="body2" sx={{ fontSize: "13px", fontWeight: "200" }}>{brand}</Typography>
                    <Typography variant="body2" sx={{ color: 'var(--main-color)', marginLeft: "4px" }}>
                      {randomNumber}
                    </Typography>
                  </Box>
                }
                sx={{ width: '100%', margin: 0 }}
              />
            </ListItem>
          );
        })}
      </List>

      <Divider sx={{ my: 2 }} />

      {/* Filter by Price */}
      <Typography variant="subtitle1" gutterBottom>
        Filter by Price
      </Typography>
      <Box sx={{ width: '100%' }}>
        <Slider
          value={priceRange}
          onChange={handlePriceChange}
          valueLabelDisplay="auto"
          min={10}
          max={599}
          sx={{ color: '#000' }}
        />
        <Typography variant="body2" sx={{ textAlign: 'center', mb: 2 }}>
          Price: ${priceRange[0]} - ${priceRange[1]}
        </Typography>
        <Button
          variant="contained"
          fullWidth
          sx={{ backgroundColor: 'var(--main-color)', color: 'white' }}
        >
          Filter
        </Button>
      </Box>
    </Box>
  );
};

export default FilterWidget;