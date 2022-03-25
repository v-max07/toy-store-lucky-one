import React, { useEffect, useState } from 'react';
import './Products.css';

const Products = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("toy_data.json")
            .then(res => res.json())
            .then(info => setItems(info))
        
    }, [])
    // console.log(items);
    return (
        <div>
            <h2>Projects file</h2>
        </div>
    );
};

export default Products;