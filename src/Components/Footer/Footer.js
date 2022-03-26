import React from 'react';

const Footer = () => {
    return (
        <div style={{ border: "1px solid blue", marginTop: "20px", padding: "30px" }}>
            <div className='props-vs-state'>
                <h2>1. What is the difference between state and props?</h2>
                <h3>-{'>'} State:</h3>
                <ol>
                    <li>state are mutable</li>
                    <li>state changes can be asynchronous</li>
                    <li>you can define states in the component itself</li>
                    <li>state can be modified using this.state</li>
                    <li>the state is set and update by the object</li>
                </ol>

                <h3>-{'>'} Props:</h3>
                <ol>
                    <li>props are immutable</li>
                    <li>props are read only</li>
                    <li>props can't be modified</li>
                    <li>you can pass properties as a props from parent components</li>
                </ol>
            </div>

        </div>
    );
};

export default Footer;