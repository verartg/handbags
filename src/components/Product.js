import React from 'react';

function Product({ bagLabel, bagImage, bagPrice, bagTitle}) {
    return (
        <article>
            <span>{bagLabel}</span>
            <img src={bagImage} alt={bagTitle}/>
            <p>{bagTitle}</p>
            <h4>{bagPrice}</h4>
        </article>
    );
}

export default Product;