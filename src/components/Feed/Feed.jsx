// @flow
import React from 'react';
import Card from '../Card/Card';
import Filters from '../Filter/Filters';

const Feed = (props) => {
  const { items, filters } = props;
  const cards = items && items.map((item, index) =>
    <Card key={index} {...item} />);
  return (
    <div>
      <Filters filters={filters}/>
      {cards}
    </div>
  )
};

export default Feed;
