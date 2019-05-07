import React from 'react';
import './input.scss';

function Input(props) {
    return (
        <div>
            <input type={props.type} placeholder={props.placeholder} name={props.name} value={props.value} onChange={props.onChange} className="input-component"></input>
        </div>
    );
};

export default Input;