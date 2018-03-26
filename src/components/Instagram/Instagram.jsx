// @flow
import React from 'react';

const Instagram = (props) => {
  const tags = props.tags.map((tag, index) => <p key={index}>{tag}</p>);
  return (
    <div>
      <img src="http://placehold.it/320x320"/>
      <p>{props.caption}</p>
      {tags}
  </div>);
};

export default Instagram;
