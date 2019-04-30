import React from 'react';
import './Travel.scss';
function Travel(props) {
    const styleImg = {
        backgroundImage: `url('/images/${props.imageUrl}')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    };

    return (
        <div className="travel-container">
            <div className="travel-info" style={styleImg}>
                <span className="offer">
                    <p>{props.offer}</p>
                </span>
                <span className="price">
                    <p>{props.price}</p>
                </span>
            </div>
            <div className="travel-name">
                <p>{props.name}</p>
            </div>
        </div>
    )
}

export default Travel;