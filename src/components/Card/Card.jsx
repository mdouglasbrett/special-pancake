// @flow
import React from 'react';
import './Card.css'
import '../Tweet/Tweet'
import Tweet from "../Tweet/Tweet";
import ManualPost from '../ManualPost/ManualPost';
import Instagram from '../Instagram/Instagram';

const Card = (props) => {
  const { type, ...rest } = props;
  let labelSrc = '';
  switch (true) {
    case type === 'twitter':
      labelSrc = '/twitter_logo.png';
      break;
    case type === 'instagram':
      labelSrc = '/instagram_logo.png';
      break;
    case type === 'manual':
      labelSrc = '/aff_logo.jpg';
      break;
    default:
      break;
  }

  return (
    <div className="c-card">
      <img className="c-card__image-label" src={labelSrc} />
      { type === 'instagram' && <Instagram {...rest} /> }
      { type === 'twitter' && <Tweet {...rest} /> }
      { type === 'manual' && <ManualPost {...rest} /> }
    </div>
  )
};

export default Card;
