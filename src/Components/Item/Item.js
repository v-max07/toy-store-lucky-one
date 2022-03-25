import React from 'react';
import './Item.css'

const Item = ({ items }) => {
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

                 {/* onClick={() => clickHandler(info)} */}
                <button className='btn-cart'>
                    Add to Cart 
                </button>
            </div>
        </div>
    );
};

export default Item;