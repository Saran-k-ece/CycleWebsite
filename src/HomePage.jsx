import React, { useEffect, useState } from "react";
import video from '../src/assets/cycle.mp4';
import { Link } from 'react-router-dom';
import './index.css';
import './HomePage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

const HomePage = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <header className={`Hheader ${isScrolled ? 'transparent' : ''}`}>
                <nav className="Nav">
                    <div className="logo-container">
                        <img src="logo3.png" alt="Logo" className="logo" />
                        <h3>HIKERS</h3>
                    </div>
                    <ul>
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/ProductList">CYCLE</Link></li>
                        <li><Link to="/CartPage">CART</Link></li>
                        <li><Link to="/About">ABOUT</Link></li>
                        
                    </ul>
                       <div className="logsign">
                       <Link to="/login"><button type="button">LOGIN</button></Link>
                       <Link to="/signup"><button type="button">SIGN UP</button></Link>
                       </div>
                </nav>
            </header>

            <div className="Himg">
                <img src="img2.webp" alt="Background" />
                <div className="ImgContent">
                    <p>INTRODUCING NEW OLTRE RC COLOURS</p>
                    <h1>SHADES OF SPEED</h1>
                    <div className="fbtn">
                    <button 
        type="button" 
        onClick={() => window.location.href='https://www.bianchi.com/oltre-rc-new-colours/'}
    >
        DISCOVER NOW
    </button>
                    </div>
                </div>
            </div>

            <div className="Hvideo">
                <video src={video} autoPlay loop muted></video>
                <div className="VideoContent">
                    <h4>GRAVEL DISCOVERY</h4>
                    <h2>THE NEW ARCADEX</h2>
                    <div className="vbtn">
                        <button type="button">DISCOVER NOW</button>
                    </div>
                </div>
            </div>

            <div className="TwoboxContainer">
                <div className="box">
                    <img src="boximg2.jpg" alt="Summer Sales" />
                    <div className="BIC">
                        <h3>SUMMER SALES</h3>
                        <h3>[50% OFFER]</h3>
                        <p>DISCOVER THE AVAILABLE ITEMS ON SALE</p>
                    </div>
                </div>
                <div className="box">
                    <img src="img1.jpg" alt="E-Vetric FX" />
                    <div className="BIC">
                        <h3>E-VETRIC FX</h3>
                        <h3>[50% OFFER]</h3>
                        <p>BATTERY: 750WH | TORQUE: 85NM | REAR</p>
                    </div>
                </div>
            </div>

            <div className="ride">
                <img src="riding.jpg" alt="Riding" />
                <div className="Store">
                    <h3>STORE</h3>
                    <h2>LOCATOR</h2>
                    <p>EXPLORE OUR NETWORK OF AUTHORIZED RESELLERS</p>
                    <div className="rBtn">
                        <button type="button">DISCOVER</button>
                    </div>
                </div>
            </div>

            <div className="Footer">
               <img src="Roadcycle.jpg"></img>
              <h2>FIND YOUR CYCLE</h2>
            </div>

            <div className="Footerimg">
                <Link to="/ProductList" className="Fcontainer">
                    <div className="box">
                        <img src="MTB1.jpg" alt="MTB" />
                        <h2>MTB</h2>
                        
                    </div>
                    <div className="box">
                        <img src="Road.webp" alt="Road" />
                        <h2>ROAD</h2>
                    </div>
                    <div className="box">
                        <img src="Sport.jpg" alt="Sport" />
                        <h2>SPORT</h2>
                    </div>
                    <div className="box">
                        <img src="city.jpeg" alt="City" />
                        <h2>CITY</h2>
                    </div>
                </Link>
            </div>

            <div className="LFooter">
                <h2>SUBSCRIBE TO HIKERS</h2>
                <div className="L1">
                    <h3>STAY UPDATED ON</h3>
                    <h3>HIKERS WORLD</h3>
                </div>
                <div className="linput">
                    <input type="email" placeholder="YOUR EMAIL HERE" />
                    <button>SUBSCRIBE</button>
                </div>
                <div className="TC">
                    <div className="TCF">
                        <input type="checkbox" />
                        <p>I HAVE READ THE PRIVACY POLICY. <span><a href="#">Available Here</a></span></p>
                    </div>
                    <div className="TCF">
                        <input type="checkbox" />
                        <p>I CONSENT TO THE PROCESSING OF MY PERSONAL DATA FOR COMMERCIAL COMMUNICATION. <span><a href="#">Hikers</a></span></p>
                    </div>
                </div>
            </div>

            <div className="Details">
                <div className="Dcontainer">
                    <div className="Company">
                        <h3>COMPANY</h3>
                        <h5>ABOUT US</h5>
                        <h5>CONTACT</h5>
                        <h5>CAREERS</h5>
                        <h5>PRESS ROOM</h5>
                        <h5>HIKERS WORLD</h5>
                        <h5>STORE LOCATOR</h5>
                        <h5>NEWS</h5>
                        <h5>WHISTLE BLOWING</h5>
                    </div>

                    <div className="Products">
                        <h3>PRODUCTS</h3>
                        <h5>ROAD</h5>
                        <h5>GRAVEL</h5>
                        <h5>E-BIKE</h5>
                        <h5>MTB</h5>
                        <h5>CITY FITNESS</h5>
                        <h5>CATALOGUES</h5>
                    </div>

                    <div className="Support">
                        <h3>SUPPORT</h3>
                        <h5>MANUALS</h5>
                        <h5>REGISTER YOUR HIKERS</h5>
                        <h5>SAFETY AND RECALLS</h5>
                        <h5>RECOGNIZE PRODUCTS</h5>
                        <h5>DOWNLOAD</h5>
                        <h5>WARRANTY POLICY</h5>
                    </div>

                    <div className="Dealers">
                        <h3>DEALERS AREAS</h3>
                        <h5>COIMBATORE</h5>
                        <h5>CHENNAI</h5>
                        <h5>BENGALURU</h5>
                        <h5>MUMBAI</h5>
                    </div>
                </div>
            </div>

            <div className="social">
                <div className="SocCon">
                    <div className="socres">
                        <p>ALL RIGHTS RESERVED BY HIKERS <span><FontAwesomeIcon icon={faCopyright} /></span></p>
                    
                    </div>

                  <div className="sociallogo">
                  <i class="fa-brands fa-square-x-twitter"></i>
                  <i class="fa-brands fa-instagram"></i>
                  <i class="fa-brands fa-facebook"></i>
                  <i class="fa-brands fa-whatsapp"></i>
                  <i class="fa-brands fa-linkedin"></i>
                  <i class="fa-brands fa-youtube"></i>
                  </div>

                    <div className="socname">
                      <p>PRIVACY POLICY | COOKIES POLICY</p>
                   
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomePage;
