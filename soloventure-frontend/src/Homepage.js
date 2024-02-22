import React, { useState } from 'react';

const Home = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleDropdownItemClick = (option) => {
        setSelectedOption(option);
    };

    return (
        <header>
            <div className="logo">Welcome to SoloVenture</div>
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
    );
};

export default Home;
