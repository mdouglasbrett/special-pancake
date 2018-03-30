// @flow
import React from 'react';
import './Tweet.css';

const Tweet = (props) => {
  return (
    <div className='c-tweet'>
      <h3>{props.user.username}</h3>
      <p>{props.tweet}</p>
    </div>
      )
};

export default Tweet;
