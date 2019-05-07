import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '../Register/Input';
import Form from '../Register/Form';
import axios from 'axios';

function LoginForm(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function onSubmit(e) {
        e.preventDefault();

        const body = { email, password };

        axios.post('http://localhost:8080/users/auth', body)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            })
        setEmail('');
        setPassword('');
    };

    return (
        <div>
            <div className="titles-login">
                <h1>LOG IN</h1>
            </div>
            <Form onSubmit={onSubmit}>
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
                    type="submit"
                    value="Enviar"
                />
                <Link to="/register"><h3>¿Ya estás registrado?</h3></Link>
            </Form>
        </div>
    );
}

export default LoginForm;