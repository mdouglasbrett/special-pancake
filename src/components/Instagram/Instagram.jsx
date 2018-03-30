// @flow
import React from 'react';
import './Instagram.css';

const Instagram = (props) => {
  // const tags = props.tags.map((tag, index) => <p className='c-instagram__tags' key={index}>{tag}</p>);
  return (
    <article className="c-instagram">
      <header className="c-instagram__header">
        <img className="c-instagram__avatar" src="https://placehold.it/150x150" />
        <p className="c-instagram__username">{props.user.username}</p>
      </header>
      <img src="https://placehold.it/320x320"/>
      <p className="c-instagram__caption">{props.caption}</p>
  </article>);
};

export default Instagram;
