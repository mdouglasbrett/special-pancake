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

const getItemsError = () => {
  return {
    type: 'GET_ITEMS_ERROR',
    payload: {
      isFetching: false
    }
  };
};

const getItemsRequest = () => {
  return {
    type: 'GET_ITEMS_REQUEST',
    payload: {
      isFetching: true
    }
  };
};

export const getItems = (params) => {
  return {
    actions: {
      error: getItemsError,
      start: getItemsRequest,
      success: data => receiveItems(data)
    },
    type: 'GET_ITEMS',
    params

  }
};
