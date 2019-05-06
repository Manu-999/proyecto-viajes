import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from './Input';
import Form from './Form';
import axios from 'axios';
// import { useEmail } from '../../Hooks/useRegister';


function RegisterForm(props) {
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function onSubmit(e) {
        e.preventDefault();

        const body = { username, email, password };

        axios.post('http://localhost:8080/users', body)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            })
        setUserName('');
        setEmail('');
        setPassword('');
    };

    return (
        <div>
            <div className="titles">
                <h1>REGISTRO</h1>
                <Link to="/login"><h3>¿Ya estás registrado?</h3></Link>
            </div>
            <Form onSubmit={onSubmit}>
                <Input
                    type="text"
                    placeholder="Username"
                    onChange={(e) => setUserName(e.target.value)}
                    value={username}
                />
                <Input
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <Input
                    type="text"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                <Input
                    type="text"
                    placeholder="Repeat Password"
                />
                <Input
                    type="checkbox"
                    name="accept" id="accept" required
                />
                <label required>Acepta los términos y condiciones así como la política de privacidad</label>
                <Input
                    type="submit"
                    value="Register"
                />
            </Form>
        </div>
    );
};

export default RegisterForm;