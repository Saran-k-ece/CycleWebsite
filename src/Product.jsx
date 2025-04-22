import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { increment } from './redux/counterSlice';
import { addItems } from './redux/cartSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product = ({ product }) => {
    const dispatch = useDispatch();
    const [count, setCount] = useState(product.rating.count);

    const handleIncrement = () => {
        dispatch(increment());
    };

    const handleAddToCart = () => {
        if (count > 0) {
            dispatch(addItems(product));
            setCount(prevCount => prevCount - 1);
            toast.success("Item added to cart!");  
        } else {
            console.log("Item out of stock");
            toast.error("Item is out of stock!");  
        }
    };

    return (
        <div className="product">
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <p className="Rating">COUNT: {count}</p>
            <header>
                <div className="header-cart">
                    <button className="add_to_cart" onClick={handleAddToCart} disabled={count <= 0}>
                        {count > 0 ? 'Add to Cart' : 'Out of Stock'}
                    </button>
                    <div id="cart-count" className="cart-count"></div>
                </div>
            </header>
            <ToastContainer 
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />  
        </div>
    );
};

export default Product;
