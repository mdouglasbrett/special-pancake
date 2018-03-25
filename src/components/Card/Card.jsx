// @flow
import React from 'react';
import './Card.css'
import '../Tweet/Tweet'
import Tweet from "../Tweet/Tweet";

const Card = (props) => {
  const { type, item_data: itemData, ...rest } = props;
  if (props.type === 'tweet') {
    console.log('props for items: ', props);
  }
  return (
    <div className="c-card">
      { type === 'instagram' && <img src="http://placehold.it/320x320" /> }
      { type === 'twitter' && <Tweet {...itemData} /> }
      { type === 'manual' && <img src="https://placehold.it/320x320" /> }
    </div>
  )
};

export default Card;
