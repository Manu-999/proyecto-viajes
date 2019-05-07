import React from 'react';
import './Form.scss';

function Form(props) {
    return (
        <div>
            <form className="form-component" onSubmit={props.onSubmit}>
                {props.children}
            </form>
        </div >
    );
}

export default Form;