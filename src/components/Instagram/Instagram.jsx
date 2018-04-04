// @flow
import React from 'react';
import './Instagram.css';

const Instagram = (props) =>
  <article className="c-instagram">
    <header className="c-instagram__header">
      <img className="c-instagram__avatar" src="https://placehold.it/150x150" />
      <strong className="c-instagram__username">{props.user.username}</strong>
    </header>
    <img src="https://placehold.it/320x320"/>
    <p className="c-instagram__caption">{props.caption}</p>
  </article>;

export default Instagram;
