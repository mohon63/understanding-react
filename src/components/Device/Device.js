import React from 'react';
import Config from '../Config/Config';

const Device = (props) => {
    return (
        <div style={{ border: "2px solid red", margin: "5px" }}>
            <h2 style={{ color: "red" }}>Device.js</h2>
            <h2>My device: {props.name}</h2>
            <h4>Curret Steps: {props.steps}</h4>
            <Config price={props.price} steps={props.steps} />


        </div>
    );
};

export default Device;