import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './MainPage.css';

const MainPage = () => {
    const [items, setItems] = useState([]);
    const [itemsInfo, setItemsInfo] = useState([]);

    useEffect(() => {
        fetch("toy_data.json")
            .then(res => res.json())
            .then(info => setItems(info))
        
    }, []);

        // set onclick function to show items info
    const addItem = id => {
        // console.log(id);

        const selectedItems = [...itemsInfo, id];
        setItemsInfo(selectedItems);
        console.log(selectedItems);

    }
    return (
        <div className='main-page'>
            <div className="products">
                {
                    items.map(item => <Item items={item} key={item.id} addItem={addItem}></Item>)
                }
            </div>
            <div className="products-info">
                <h3>info page 2</h3>
                {
                    itemsInfo.map(item => <div className='cart-item-info' key={item.id}><img src={item.image} alt="" />
                            <p>{item.name}</p>
                            <button>DeL</button></div> )
                }
            </div>
        </div>
    );
};

export default MainPage;