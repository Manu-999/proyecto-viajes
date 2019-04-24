import React from 'react';
import './Icons.scss';

function Icons(props) {
    return (
        <nav className="social">
            <a href="#social"><i className="icons fab fa-twitter"></i></a>
            <a href="#social"><i className="icons fab fa-whatsapp"></i></a>
            <a href="#social"><i className="icons fab fa-facebook"></i></a>
            <a href="#social"><i className="icons fab fa-instagram"></i></a>
            <a href="#social"><i className="icons fab fa-linkedin"></i></a>
            <a href="#social"><i className="icons fab fa-youtube"></i></a>
        </nav>
    )
}

export default Icons;