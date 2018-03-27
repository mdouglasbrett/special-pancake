// @flow
import React from 'react';
import Card from '../Card/Card';
import Filters from '../Filter/Filters';
import Button from '../Button/Button';
import './Feed.css';

const Feed = (props) => {
  const { items, onFilterToggle, onButtonPress } = props;
  const cards = items.map((item, index) =>
    <Card key={index} {...item} />);
  return (
    <div>
      <Filters onFilterToggle={onFilterToggle} />
        <section className="c-feed">
          {cards}
        </section>
      <Button onClick={onButtonPress} />
    </div>
  )
};

export default Feed;
