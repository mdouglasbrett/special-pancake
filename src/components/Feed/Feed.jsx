// @flow
import React from 'react';
import Card from '../Card/Card';

const Feed = (props) => {
  return (
    <div>
      {
        props.items && props.items.map((item, index) =>
          <Card key={index} {...item} />)
      }
    </div>
  )
};

export default Feed;
