import React from 'react';

function Button(props) {
    return (
            <button
                type="button"
                disabled={props.unclickable}
                onClick={() => console.log(props.buttonText)}>
                {props.buttonText}
            </button>
    );
}

export default Button;