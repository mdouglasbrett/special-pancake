// @flow
import React from 'react';
import './ManualPost.css';

const ManualPost = (props) =>
  (<div className='c-manual-post'>
    <img src="http://placehold.it/320x320" />
    <p>{props.text}</p>
    <a href={props.link} >{props['link_text']}</a>
  </div>);

export default ManualPost;
