// @flow
import React from 'react';
import Card from '../Card/Card';
import Filters from '../Filter/Filters';

const Feed = (props) => {
  const { items, onFilterToggle } = props;
  const cards = items.map((item, index) =>
    <Card key={index} {...item} />);
  return (
    <div>
      <Filters onFilterToggle={onFilterToggle} />
      {cards}
    </div>
  )
};

export default Feed;
