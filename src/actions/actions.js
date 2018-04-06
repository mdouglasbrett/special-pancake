import shapeData from '../utils/shapeData';

export const receiveItems = (response) => {
  if (response.items) {
    return {
      type: 'RECEIVE_ITEMS',
      payload: {
        items: shapeData(response.items),
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

// TODO: error handling here
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
    type: 'CALL_API',
    params,
    method: 'GET'

  }
};
