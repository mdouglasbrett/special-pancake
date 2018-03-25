// @flow
import React from 'react';

const Card = (props) => {
  console.log('Card Props: ', props);
  const { item_data: itemData, ...rest } = props;
  console.log('ItemData: ', itemData);

  return (
    <div />
  )
};

export default Card;
