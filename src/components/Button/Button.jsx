// @flow
import React from 'react';
import './Button.css';

const Button = (props) => {
    console.log(props);
    return (<button className='c-button u-title' onClick={props.onClick}>
      Load More
    </button>)
};

export default Button;
