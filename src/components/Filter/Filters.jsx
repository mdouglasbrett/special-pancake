// @flow
// TODO: don't forget to sort out the keys!!
import React from 'react';
import './Filters.css';

// TODO: clean up all this key={index} malarkey
const Filters = (props) => {
  const { activeFilters, onFilterToggle } = props;
  const filters = ['instagram', 'twitter', 'manual']
    .map((filter, index) => (
      <span key={index} className="c-filter">
        <input
          key={index}
          className="c-filter__input"
          id={filter} type="checkbox"
          defaultChecked={activeFilters.includes(filter)}
          name={filter}
          onClick={() => {
            onFilterToggle(filter)
          }}
        />
        <label className="c-filter__label u-title" htmlFor={filter}>{filter}</label>
      </span>) );
  return (
    <div className="c-filters">
      {filters}
    </div>
  );
};

export default Filters;
