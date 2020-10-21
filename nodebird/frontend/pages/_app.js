import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import wrapper from '../store/configureStore';
import AppLayout from '../components/AppLayout';
import 'antd/dist/antd.css';

NodeBird.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

function NodeBird({ Component }) {

  return (
    <div className="NodeBird">
      <Head>
        <title>NodeBird</title>
      </Head>
      <AppLayout>
        <Component />
      </AppLayout>
    </div>
  );
}

export default wrapper.withRedux(NodeBird);