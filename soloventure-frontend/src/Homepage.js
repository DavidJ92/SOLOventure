import React, { useState } from 'react';
import logo from './logo.svg';

const Home = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleDropdownItemClick = (option) => {
        setSelectedOption(option);
    };

    return (
        <div>
            <header>
                <img src={logo} className="SoloVenture-logo" alt="logo" />
                <p>What adventures are you going to embark on today?</p>
                <nav>
                    <ul className="dropdown">
                        <li>
                            <a href="#menu">Menu</a>
                            <ul className="dropdown-choices">
                                <li onClick={() => handleDropdownItemClick('journal')}><a href="#journal">Journal</a></li>
                                <li onClick={() => handleDropdownItemClick('communities')}><a href="#communities">Communities</a></li>
                                <li onClick={() => handleDropdownItemClick('featured-destinations')}><a href="#featured-destinations">Featured Destinations</a></li>
                                <li onClick={() => handleDropdownItemClick('logout')}><a href="#logout">Logout</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </header>
            <footer>
                <div className="footer-content">
                    <div className="api-credits">
                        <p>APIs</p>
                        <ul>
                            <li>API 1</li>
                            <li>API 2</li>
                        </ul>
                    </div>
                    <div className="contact-us">
                        <a href="contact-us">Contact Us</a>
                    </div>
                    <div className="copyright">
                        <p>© 2024 SoloVenture</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;

