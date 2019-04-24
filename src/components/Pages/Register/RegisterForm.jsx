import React from 'react';
import { Link } from 'react-router-dom';


function Form() {
    return (
        <div>
            <div className="titles">
                <h1>REGISTRO</h1>
                <Link to="/login"><h3>¿Ya estás registrado?</h3></Link>
            </div>
            <form className="register-form">
                <input type="text" placeholder="Username"></input>
                <input type="text" placeholder="Email"></input>
                <input type="text" placeholder="Password"></input>
                <input type="checkbox" name="accept" id="accept"></input>
                <label>Acepta los términos y condiciones así como la política de privacidad</label>
                <input type="submit" value="Register"></input>
            </form>
        </div>
    );
};

export default Form;