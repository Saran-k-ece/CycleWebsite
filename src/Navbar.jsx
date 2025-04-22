import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartCount } from './redux/cartSlice'; 
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const cartCount = useSelector(selectCartCount); 
    const navigate = useNavigate(); 

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/ProductList?search=${encodeURIComponent(searchQuery)}`);
        }
    };

    return (
        <header className={`Hheader ${isScrolled ? 'transparent' : ''}`}>
            <nav className="Nav">
                <div className="logo-container">
                    <img src="logo3.png" alt="Logo" className="logo" />
                    <h3>HIKERS</h3>
                </div>
                <ul>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/ProductList">CYCLE</Link></li>
                    <li><Link to="/CartPage">CART ({cartCount})</Link></li>
                    <li><Link>ORDER</Link></li>
                </ul>
                <form onSubmit={handleSearch} className="search-container">
                    <input
                        type="text"
                        placeholder="Search cycles..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="search-input"
                    />
                    <button type="submit" className="search-button">Search</button>
                </form>
            </nav>
        </header>
    );
};

export default Navbar;
