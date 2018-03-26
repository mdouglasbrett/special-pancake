// @flow
import React from 'react';

const ManualPost = (props) =>
  (<div>
    <img src="http://placehold.it/320x320" />
    <p>{props.text}</p>
    <a href={props.link} >{props['link_text']}</a>
  </div>);

export default ManualPost;
