// @flow
import React from 'react';
import './Instagram.css';

const Instagram = (props) => {
  const tags = props.tags.map((tag, index) => <p key={index}>{tag}</p>);
  return (
    <div className="c-instagram">
      <img src="http://placehold.it/320x320"/>
      <p>{props.caption}</p>
      {tags}
  </div>);
};

export default Instagram;
