import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import AppLayout from '../components/AppLayout';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import rootReducer from '../reducers';


function NodeBird({ Component, store }) {
  return (
    <>
      <Provider store={store}>
        <Head>
          <title>NodeBird</title>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css" />
        </Head>
        <AppLayout>
          <Component />
        </AppLayout>
      </Provider>
    </>
  );
};

NodeBird.propTypes = {
  Component: PropTypes.elementType,
  store: PropTypes.object
}

export default withRedux((initialState, options) => {
  const middlewares = [];
  const enhancer = compose(
    applyMiddleware(...middlewares), !options.isServer && window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f);
  const store = createStore(rootReducer, initialState, enhancer);
  return store;
})(NodeBird);