// @flow
import React from 'react';

const Filters = (props) => {
  const filters = Object.keys(props.filters)
    .map((filter, index) => <input key={index} type="checkbox" name={filter} onClick={props.onFilterToggle}/> );
  return (
    <div>
      {filters}
    </div>
  );
};

export default Filters;
