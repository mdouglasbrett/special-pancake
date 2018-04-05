import { combineReducers } from 'redux';

const initialFeedState = {
  items: [],
  isFetching: false,
  messages: [],
};

const initialFilterState = {
  activeFilters: []
};

function feed(state = initialFeedState, action) {
  switch (action.type) {
    case 'GET_ITEMS_REQUEST':
      return {
        ...state,
        isFetching: true
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
    case 'ADD_FILTER':
      return {
        ...state,
        activeFilters: [...state.activeFilters, action.payload]
      };
    case 'REMOVE_FILTER':
      return {
        ...state,
        activeFilters: state.activeFilters.filter(f => f !== action.payload)
      };
    default:
      return state;
  }
}

export default combineReducers({
  feed,
  filters
});

