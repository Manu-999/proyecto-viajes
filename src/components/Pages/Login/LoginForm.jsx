import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../Register/Input';
import Menu from '../../layout/Menu';
import Form from '../Register/Form';

function LoginForm(props) {
    return (
        <div>
            <div className="titles-login">
                <h1>LOG IN</h1>
            </div>
            <Form>
                <Menu />
                <Input type="email" placeholder="Email"></Input>
                <Input type="text" placeholder="Password"></Input>
                <Input type="submit" value="Enviar"></Input>
                <Link to="/register"><h3>¿No recuerdas tu contraseña?</h3></Link>
            </Form>
        </div>
    );
}

export default LoginForm;