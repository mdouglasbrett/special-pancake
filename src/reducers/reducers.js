import { combineReducers } from 'redux';

const initialFeedState = {
  items: [],
  isFetching: false,
  messages: [],
};

const initialFilterState = {
  instagram: false,
  twitter: false,
  manual: false
};

function feed(state = initialFeedState, action) {
  switch (action.type) {
    case 'FETCH_ITEMS':
      return {
        ...state,
        isFetching: action.payload.isFetching
      };
    case 'RECEIVE_ITEMS':
      return {
        ...state,
        items: [
          ...state.items,
          ...action.payload.items
        ],
        isFetching: action.payload.isFetching
      };
    case 'RECEIVE_ITEMS_ERROR':
      return {
        ...state,
        isFetching: action.payload.isFetching,
        messages: [
          ...state.messages,
          ...action.payload.messages
        ]
      };
    default:
      return state;
  }
}

function filters(state = initialFilterState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default combineReducers({
  feed,
  filters
});

