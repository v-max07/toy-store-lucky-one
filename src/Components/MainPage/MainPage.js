import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './MainPage.css';

const MainPage = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("toy_data.json")
            .then(res => res.json())
            .then(info => setItems(info))
        
    }, [])
    return (
        <div className='main-page'>
            <div className="products">
                {
                    items.map(item => <Item items={item} key={item.id}></Item>)
                }
            </div>
            <div className="products-info">
                <h3>info page 2</h3>
            </div>
        </div>
    );
};

export default MainPage;