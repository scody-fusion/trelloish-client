import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from 'reducers';
import thunk from 'redux-thunk';
import reduxPromise from 'redux-promise';

export default ({ children, initialState = {} }) => {
    console.log('initialState:', initialState);
    const store = createStore(
      reducers,
      initialState,
      applyMiddleware(thunk, reduxPromise)
    );

    return <Provider store={store}>{children}</Provider>;
}
// <Provider store={createStore(reducers, initialState, applyMiddleware(thunk))}>
//     {props.children}
// </Provider>