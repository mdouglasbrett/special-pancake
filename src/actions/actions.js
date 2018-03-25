
export const fetchItems = () => {
  return {
    type: 'FETCH_ITEMS',
    payload: {
      isFetching: true
    }
  }
};

export const receiveItems = (response) => {
  if (response.items) {
    return {
      type: 'RECEIVE_ITEMS',
      payload: {
        items: response.items,
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

// export const loadMoreItems = () => {
//   return {
//     type: 'LOAD_MORE',
//     payload: {
//       message: 'Clicked the button'
//     }
//   }
// };
