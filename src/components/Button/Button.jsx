import React from 'react';

const Button = (props) => {
    console.log(props);
    return (<button onClick={props.onClick}>
        Load More
    </button>)
};

export default Button;
