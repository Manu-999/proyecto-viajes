import React from 'react';
import Input from '../Pages/Register/Input';
import Icons from './Icons';

function Footer(props) {
    return (
        <div>
            <div className="contact">

            </div>
            <div className="information">

            </div>
            <div className="newsletter">
                <Input type="email" placeholder="Email"></Input>
                <Icons />
            </div>
        </div>
    );
}


export default Footer;