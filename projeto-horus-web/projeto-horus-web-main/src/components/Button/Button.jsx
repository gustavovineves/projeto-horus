import React from 'react';
import './button.css'

function Button({children}) {
    return (
        <button className={'buttonConfig'}>
            {children}
        </button>
    );
}

export default Button;