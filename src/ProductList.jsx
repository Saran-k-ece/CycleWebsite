import React from 'react';
import { useLocation } from 'react-router-dom';
import { product } from './products'; 
import Product from './Product';  
import './ProductList.css'; 
import Navbar from './Navbar';
import './Navbar.css' 

const ProductList = () => {
    const { search } = useLocation();
    const queryParams = new URLSearchParams(search);
    const searchQuery = queryParams.get('search') || '';


    const filteredProducts = product[0].filter(p =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <Navbar /> 
            <div className="product-list">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map(product => (
                        <Product key={product.id} product={product} />
                    ))
                ) : (
                    <p>No products found</p>
                )}
            </div>
        </>
    );
}

export default ProductList;
