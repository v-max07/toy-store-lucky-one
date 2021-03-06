import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Item.css'

const Item = ({ items, addItem }) => {
    // console.log(items); 
    const { name, balance, image, company } = items;
    return (
        <div>
            <div className='product'>
                <img src={image} alt="" />
                <div className='product-info'>
                    <h3>{name}</h3>
                    <p>Price: {balance} </p>
                    <small>Manufacture: {company} </small>
                </div>

                <button className='btn-cart' onClick={() => addItem(items)}>
                    Add to Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default Item;