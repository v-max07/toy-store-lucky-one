import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './MainPage.css';

const MainPage = () => {
    const [items, setItems] = useState([]);
    const [itemsInfo, setItemsInfo] = useState([]);
    const [randomItem, setRandomItem] = useState([])

    useEffect(() => {
        fetch("toy_data.json")
            .then(res => res.json())
            .then(info => setItems(info))
        
    }, []);

        // set onclick function to show items info
    const addItem = id => {
        let selectedItems;
        // console.log(id);
        if (itemsInfo.length === 4) {
            alert("Sorry, You Can Choose Only 4 Items!!!")
        } else {
                if (itemsInfo.includes(id)) {
                    alert("You already add this item!")
                } else {
                    selectedItems = [...itemsInfo, id];
                    setItemsInfo(selectedItems);
                }  
        }
        
        // console.log(selectedItems); 

    };

    const freeToy = () => { 
        let randomNumber;
        randomNumber = Math.floor((Math.random() * 4));

        const newRandomItem = itemsInfo[randomNumber];
        setRandomItem(newRandomItem);
        setItemsInfo([]);
        
    };

    const resetChoices = () => {
        setItemsInfo([]);
    }

    return (
        <div className='main-page'>
            <div className="products">
                {
                    items.map(item => <Item items={item} key={item.id} addItem={addItem}></Item>)
                }
            </div>
            <div className="products-info">
                <h3><div className='messageBar'></div>Click the spin button if you want to get a free Toy!</h3>

                <button onClick={freeToy} className='spin-btn'>Spin</button>

                <button onClick={resetChoices} className='rest-btn'>Restart</button>

                <div className='lotteryDiv'>
                    <h2 style={{ color: "Orange" }}>
                        <span style={{ fontSize: "32px" }}>C</span>ongratulations!</h2>
                    <div>
                        <p>You won this toy-</p>
                        <img src={randomItem.image} alt="" />
                        <p>Name: {randomItem.name}</p>
                        <p>Price: {randomItem.balance}</p>
                    </div>
                </div>
                


                <div style={{border:" 1px solid blue", margin: "10px 0px", padding:"20px"}}>
                     {
                        itemsInfo.map(item => <div className='cart-item-info' key={item.id}><img src={item.image} alt="" />
                            <p>{item.name}</p>
                            <span><FontAwesomeIcon icon={faTrashCan} /></span></div> )
                    }
                </div>
            </div>
        </div>
    );
};

export default MainPage;