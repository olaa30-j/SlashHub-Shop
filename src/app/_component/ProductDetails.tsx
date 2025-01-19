"use client"
import React, { useState } from "react";
import {
    Breadcrumbs,
    Typography,
    Link,
    Rating,
    IconButton,
    TextField,
    Button,
} from "@mui/material";
import {
    Share as ShareIcon,
    FavoriteBorder as FavoriteBorderIcon,
    Comment as CommentIcon,
    Favorite as FavoriteIcon,
} from "@mui/icons-material";
import ProductSlider from "./ProductSlider";
import { Product } from "../_store/reducers/productsSlice";


interface ProductDetailsProps {
    product: Product;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
    const rating = product.rating || { rate: 0, count: 0 };
    const [isHeartSelected, setIsHeartSelected] = useState<boolean>(false); 

    const handleHeartClick = () => {
        setIsHeartSelected(!isHeartSelected);  
    };
    const handleAddToCart = (event: React.FormEvent) => {
        event.preventDefault();
        console.log("Product added to cart:", product.title);
    };

    return (
        <div className="flex flex-col md:flex-row w-full max-w-[1230px] mx-auto my-[15px] p-[15px] gap-6">
            {/* Product Slider */}
            <div className="w-full md:w-2/4">
                <ProductSlider image={product.image} />
            </div>

            <div className="w-full md:w-2/4">
                {/* Breadcrumbs */}
                <Breadcrumbs aria-label="breadcrumb" className="mb-4">
                    <Link color="inherit" href={`/shop`}>
                        Shop
                    </Link>
                    <Typography color="texttext-gray-600">Product</Typography>
                </Breadcrumbs>

                {/* Product Title */}
                <Typography variant="h4" className="mb-4">
                    {product.title}
                </Typography>

                {/* Rating */}
                <div className="rank-rating flex items-center mb-4">
                    <Rating
                        name="product-rating"
                        value={rating.rate}
                        precision={0.1}
                        readOnly
                        className="mr-2"
                    />
                    <Typography variant="body2" className="text-gray-600">
                        Reviews ({rating.count})
                    </Typography>
                </div>

                {/* Comment List */}
                <ul className="list-unstyled comment-list flex space-x-4 mb-6">
                    <li>
                        <IconButton
                            className ="text-gray-600"
                            sx={{
                                color: isHeartSelected ? "red" : "text-gray-600", 
                                "&:hover": {
                                    color: "var(--main-color)",  
                                },
                            }}
                            onClick={handleHeartClick}  
                        >
                            {isHeartSelected ? <FavoriteIcon /> : <FavoriteBorderIcon />}  
                            <Typography variant="body2" className="ml-2">
                                Add To Wishlist
                            </Typography>
                        </IconButton>
                    </li>
                    <li>
                        <IconButton
                            className = "text-gray-600"
                            sx={{
                                "&:hover": {
                                    color: "var(--main-color)",  
                                },
                            }}
                        >
                            <CommentIcon />
                            <Typography variant="body2" className="ml-2">
                                12
                            </Typography>
                        </IconButton>
                    </li>
                    <li>
                        <IconButton
                            className="text-gray-600"
                            sx={{
                                "&:hover": {
                                    color: "var(--main-color)",  
                                },
                            }}
                        >
                            <ShareIcon />
                            <Typography variant="body2" className="ml-2">
                                14
                            </Typography>
                        </IconButton>
                    </li>
                </ul>

                {/* Description */}
                <div className="txt-wrap mb-6">
                    <Typography variant="body1" className="mb-8">
                        {product.description}
                    </Typography>
                </div>

                {/* Price */}
                <div className="text-holder mb-6">
                    <Typography variant="h6" className="text-red-600">
                        $ {product.price} <del className="text-gray-500 ml-2">$399.00</del>
                    </Typography>
                </div>

                {/* Quantity and Add to Cart Form */}
                <form className="product-form" onSubmit={handleAddToCart}>
                    <div className="flex items-center space-x-4">
                        <TextField
                            id="qty"
                            label="Qty"
                            type="number"
                            defaultValue="1"
                            variant="outlined"
                            className="w-24"
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    "&.Mui-focused fieldset": {
                                        borderColor: "var(--main-color)",
                                    },
                                    padding: "0.25rem 0.5rem",
                                },
                                "& .MuiInputLabel-root": {
                                    "&.Mui-focused": {
                                        color: "var(--main-color)",
                                    },
                                },
                                "& .MuiOutlinedInput-input": {
                                    padding: "0.25rem 0.5rem",
                                },
                            }}
                        />
                        <Button variant="contained" sx={{ background: "var(--main-color)" }} type="submit">
                            ADD TO CART
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProductDetails;