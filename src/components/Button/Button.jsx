// @flow
import React from 'react';
import './Button.css';
import Ellipsis from '../Ellipsis/Ellipsis';

const STYLE_PREFIX = 'c-button';

const Button = (props) => {
  let classname = STYLE_PREFIX;
  if (props.isFetching) {
    classname += ` ${STYLE_PREFIX}--loading`;
  }
  return (
    <button className={`${classname} u-title`} onClick={props.onClick}>
      {
        props.isFetching && <span className="c-button__loading-message"><span>Loading</span><Ellipsis /></span>

      }
      {
        !props.isFetching && <span>Load More</span>
      }
    </button>
  );
};

export default Button;
