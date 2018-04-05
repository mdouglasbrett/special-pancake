// @flow
import React from 'react';
import Card from '../Card/Card';
import Filters from '../Filter/Filters';
import Button from '../Button/Button';
import './Feed.css';

const Feed = (props) => {
  const { items, onFilterToggle, onButtonPress, isFetching } = props;
  const cards = items.map((item, index) =>
    <Card key={index} {...item} />);
  return (
    <div>
      <h2 className='c-feed__heading'>Filter Your Feed...</h2>
      <Filters onFilterToggle={onFilterToggle} activeFilters={props.activeFilters} />
        <section className="c-feed">
          {cards}
        </section>
      <Button onClick={onButtonPress} isFetching={isFetching} />
    </div>
  )
};

export default Feed;
