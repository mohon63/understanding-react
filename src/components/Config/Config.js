import React from 'react';

const Config = (props) => {
    return (
        <div style={{ border: "2px solid green", margin: "5px" }}>
            <h2 style={{ color: "green" }}>Config.js</h2>
            <ul>
                <li>Price: {props.price}</li>
                <li>Steps: {props.steps}</li>
            </ul>
        </div>
    );
};

export default Config;