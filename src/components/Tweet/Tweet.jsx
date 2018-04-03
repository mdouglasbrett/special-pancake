// @flow
import React from 'react';
import './Tweet.css';

const Tweet = (props) => {
  return (
    <article className="c-tweet">
      <div className="c-tweet__header">
        <div className="c-tweet__avatar">
          <img className="c-avatar" src="https://placehold.it/150x150"/>
        </div>
        <span className="c-tweet__fullname">
        <strong className="c-tweet__name">{props.user.name}</strong>
        </span>
        <span className="c-tweet__handle">
        <b className="c-tweet__username">{`@${props.user.username}`}</b>
        </span>
      </div>
      <div className="c-tweet__main">
        <p className="c-tweet__content" dangerouslySetInnerHTML={{__html: props.tweet}}/>
      </div>
    </article>
  )
};

export default Tweet;
