"use client";
import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Box, Chip } from '@mui/material';
import { FavoriteBorder, ShoppingBag, CompareArrows } from '@mui/icons-material';
import { Product } from '@/store/reducers/productsSlice';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { title, price, image } = product;

  return (
    <Card sx={{ maxWidth: 330, margin: 'auto', position: 'relative', boxShadow: "none" }} className='group'>
      {/* Product Image with Discount Badge */}
      <Link href={`/shop/${product.id}`}>
        <Box sx={{ position: 'relative' }}>
          <CardMedia component="img" image={image} alt={title} sx={{ backgroundSize: "contain" }} className='h-[250px] transition-all duration-[2000ms] group-hover:scale-110' />
          <Chip
            label={`30% Off`}
            color="secondary"
            size="small"
            sx={{ position: 'absolute', top: 10, left: 10, background: "var(--main-color)", borderRadius: "0" }}
          />

          {/* Product Actions */}
          <CardActions
            sx={{
              gap: 1,
              position: 'absolute',
              bottom: "-10px",
              left: "50%",
              transform: "translateX(-50%)",
              background: "white",
              border: "1px solid var(--border-color)",
              opacity: 0,
              padding: 0,
              display: "flex",
              justifyContent: "space-around",
            }}

            className='transition-all duration-[2000ms] ease-in-out group-hover:opacity-100 w-full'
          >
            <IconButton
              aria-label="Add to Cart"
              sx={{
                padding: "9px 16px",
                marginLeft: 0,
                borderRight: "1px solid var(--border-color)",
                borderRadius: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                '&:hover': {
                  backgroundColor: 'transparent',
                  '& svg': {
                    color: 'red',
                  },
                  '& span': {
                    color: 'red',
                  }
                }
              }}
            >
              <ShoppingBag sx={{ margin: 0 }} />
              <span style={{ fontSize: '0.75rem', marginLeft: '8px' }}>Add To Cart</span>
            </IconButton>

            <IconButton
              aria-label="Add to Favorites"
              sx={{
                padding: "9px 35px 9px 0px",
                margin: "0px",
                borderRadius: 0,
                borderRight: "1px solid var(--border-color)",
                '&:hover': {
                  backgroundColor: 'transparent',
                  '& svg': {
                    color: 'red',
                  }
                }
              }}
            >
              <FavoriteBorder sx={{ fontSize: '24px', margin: "auto" }} />
            </IconButton>

            <IconButton
              aria-label="Compare"
              sx={{
                padding: "9px 22px 9px 0px",
                borderRadius: 0,
                margin: "0px",
                display: "flex",
                justifyContent: "center",
                '&:hover': {
                  backgroundColor: 'transparent',
                  '& svg': {
                    color: 'red',
                    margin: "auto"
                  }
                }
              }}
            >
              <CompareArrows sx={{ fontSize: '24px', margin: "auto" }} />
            </IconButton>
          </CardActions>
        </Box>
      </Link>


      {/* Product Data */}
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          €{price.toFixed(2)}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
