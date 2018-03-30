// @flow
import React from 'react';
import './Button.css';

const Button = (props) => {
    console.log(props);
    return (<button className='c-button u-title' onClick={props.onClick}>
      <h2>Load More</h2>
    </button>)
};

export default Button;
