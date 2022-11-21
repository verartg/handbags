import React from 'react';

function Tile({ image, title, imageDescription, children }) {
    return (
        <section>
            <img src={image} alt={imageDescription}/>
            <h2>{title}</h2>
            {children}
        </section>
    );
}

export default Tile;