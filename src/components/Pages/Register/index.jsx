import React from 'react';
import Menu from '../../layout/Menu';
import Form from './RegisterForm';
import Footer from '../../layout/Footer';

function Register(props) {
    const style = {
        backgroundImage: `url('/images/fondoNav.png')`,
        backgroundSize: 'cover',
        margin: '0',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: '1%'
    };

    return (
        <div>
            <Menu style={style} />
            <Form />
            <Footer />
        </div>
    );
}

export default Register;