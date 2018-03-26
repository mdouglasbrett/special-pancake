// @flow
import React from 'react';
import './Card.css'
import '../Tweet/Tweet'
import Tweet from "../Tweet/Tweet";
import ManualPost from '../ManualPost/ManualPost';
import Instagram from '../Instagram/Instagram';

const Card = (props) => {
  const { type, ...rest } = props;
  if (props.type === 'tweet') {
    console.log('props for tweets: ', props);
  }
  if (props.type === 'instagram') {
    console.log('props for insta: ', props);
  }
  if (props.type === 'manual') {
    console.log('props for manual', props);
  }
  return (
    <div className="c-card">
      { type === 'instagram' && <Instagram {...rest} /> }
      { type === 'twitter' && <Tweet {...rest} /> }
      { type === 'manual' && <ManualPost {...rest} /> }
    </div>
  )
};

export default Card;
