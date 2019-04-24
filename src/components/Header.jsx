import React from 'react';
import '../css/Header.scss';

const Header = props => {
    return (
        <header className="image-header">
            <div className="titles">
                <h1 className="header-title">Viaja!</h1>
                <h2 className="header-subtitle">Descubre lugares maravillosos!</h2>
            </div>
            <div className="header-button">
                <button className="button">ver destinos</button>
            </div>
        </header>
    )
}

export default Header;