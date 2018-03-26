// @flow
import React from 'react';

const Filters = (props) => {
  const filters = ['instagram', 'twitter', 'manual']
    .map((filter, index) => <input key={index} type="checkbox" name={filter} onClick={() => {
      props.onFilterToggle(filter)
    }}/> );
  return (
    <div>
      {filters}
    </div>
  );
};

export default Filters;
