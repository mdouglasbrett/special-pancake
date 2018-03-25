// @flow
import React from 'react';

const Tweet = (props) => {
  console.log('Tweet props: ', props);
  return (
    <div>
      <h3>{props.user.username}</h3>
      <p>{props.tweet}</p>
    </div>
      )
};

export default Tweet;
