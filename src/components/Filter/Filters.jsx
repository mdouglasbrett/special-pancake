// @flow
// TODO: don't forget to sort out the keys!!
import React from 'react';

const Filters = (props) => {
  const filters = ['instagram', 'twitter', 'manual']
    .map((filter, index) => (
      <span key={index}>
        <label>{filter}</label>
        <input key={index} type="checkbox" name={filter} onClick={() => {
      props.onFilterToggle(filter)
    }}/>
      </span>) );
  return (
    <div>
      {filters}
    </div>
  );
};

export default Filters;
