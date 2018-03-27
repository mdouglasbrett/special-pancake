import shapeData from '../utils/shapeData';
import dummyData from './affMock.js';

export const fetchItems = () => {
  return {
    type: 'FETCH_ITEMS',
    payload: {
      isFetching: true
    }
  }
};

export const receiveItems = (/* response */) => {
  if (true /*response.items */) {
    return {
      type: 'RECEIVE_ITEMS',
      payload: {
        items: shapeData(dummyData.items),
        isFetching: false
      }
    }
  } else {
    return {
      type: 'RECEIVE_ITEMS_ERROR',
      payload: {
        isFetching: false,
        messages: []
      }
    }
  }
};

const addFilter = (id) => {
  return {
    type: 'ADD_FILTER',
    payload: id
  }
};

const removeFilter = (id) => {
  return {
    type: 'REMOVE_FILTER',
    payload: id
  }
};

export const toggleFilter = (id) => (dispatch, getState) => {
  const filters = getState().filters.activeFilters;
  if (!filters.includes(id)) {
    dispatch(addFilter(id))
  } else {
    dispatch(removeFilter(id))
  }
};

// export const loadMoreItems = () => {
//   return {
//     type: 'LOAD_MORE',
//     payload: {
//       message: 'Clicked the button'
//     }
//   }
// };
