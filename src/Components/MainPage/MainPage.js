import React from 'react';
import Products from '../Products/Products';
import './MainPage.css';

const MainPage = () => {
    return (
        <div className='main-page'>
            <div className="products">
                <h3>products page1</h3>
                <Products></Products>
            </div>
            <div className="products-info">
                <h3>info page 2</h3>
            </div>
        </div>
    );
};

export default MainPage;