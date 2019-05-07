import React from 'react';
import Menu from '../../layout/Menu';
import LoginForm from './LoginForm';
import Footer from '../../layout/Footer';
function Login(props) {
    return (
        <div>
            <Menu />
            <LoginForm />
            <Footer />
        </div>
    )
}

export default Login;