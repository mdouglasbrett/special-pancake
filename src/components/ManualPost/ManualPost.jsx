// @flow
import React from 'react';
import './ManualPost.css';

const ManualPost = (props) =>
  (<div className="c-manual-post">
    <img className="c-manual-post__image" src="https://placehold.it/320x320" />
    <p className="c-manual-post__text">{props.text}</p>
    <a className="c-manual-post__link" href={props.link} >{props['link_text']}</a>
  </div>);

export default ManualPost;
