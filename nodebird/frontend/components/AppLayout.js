import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import NavBar from './NavBar';
import UserProfile from './UserProfile';
import LoginForm from './LoginForm';


AppLayout.propTypes = {
  children: PropTypes.node
};

function AppLayout({ children }) {
  const { isLoggedIn } = useSelector(state => state.user);

  return (
    <div>
      <NavBar />
      <Row gutter={12}>
        <Col xs={24} md={6} style={{ marginLeft: 12 }} >
          {isLoggedIn &&
            <UserProfile /> || <LoginForm />}
        </Col>
        <Col xs={24} md={12}>{children}</Col>
        <Col xs={24} md={6}>made by guya</Col>
      </Row>
    </div>
  );
}

export default AppLayout;
