import React from 'react';
import { Link } from 'react-router-dom';
import Input from './Input';
import Form from './Form';
// import { useEmail } from '../../Hooks/useRegister';


function RegisterForm() {
    // const [email, setEmail] = useEmail('');

    // const change = (e) => {
    //     e.preventDefault();
    //     const finalEmail = { email }
    //     console.log(finalEmail);
    // }

    return (
        <div>
            <div className="titles">
                <h1>REGISTRO</h1>
                <Link to="/login"><h3>¿Ya estás registrado?</h3></Link>
            </div>
            <Form>
                <Input type="text" placeholder="Username"></Input>
                <Input type="email" placeholder="Email"></Input>
                <Input type="text" placeholder="Password"></Input>
                <Input type="text" placeholder="Repeat Password"></Input>
                <Input type="checkbox" name="accept" id="accept" required></Input>
                <label>Acepta los términos y condiciones así como la política de privacidad</label>
                <Input type="submit" value="Register"></Input>
            </Form>
        </div>
    );
};

export default RegisterForm;