// @flow
// TODO: return mock data if behind 'development' flag

import _ from 'lodash';

const methods = ['get', 'post', 'put', 'delete'];

const noop = () => ({
  type: 'NOOP'
});

const getHandler = (actions, action) =>
  (actions && actions[action]) || noop;

export default function api() {
  return store => next => async action => {
    if (_.isUndefined(action.type) || action.type !== 'CALL_API') {
      return next(action);
    }
    const { actions } = action;
    const onSuccess = getHandler(actions, 'success');
    const onError = getHandler(actions, 'error');
    const onStart = getHandler(actions, 'start');
    const method = methods.indexOf(action.method) >= 0
      ? action.method
      : methods[0];

    store.dispatch(onStart());

    let url = 'http://private-cc77e-aff.apiary-mock.com/posts';
    // TODO: look at fetch() api to see how it handles methods/params etc
    // if (method === 'get' && action.params && Object.keys(action.params).length > 0) {
    //   url += `?${...action.params}`;
    // }

    try {
      const response = await fetch(url, {method});
      if (!response.ok) {
        // TODO: error handling with fetch()?
        throw new Error('Problem with the fetch')
      }
      const data = await response.json();
      store.dispatch(onSuccess(data));
    } catch (error) {
      const { dispatch } = store;

      switch (true) {
        // TODO: error handling with fetch()?
        default:
          return dispatch(onError(error));
      }
    }
    return next(action);
  };
}
