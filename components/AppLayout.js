import React, { useState } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Menu, Input, Card, Avatar, Row, Col } from 'antd';
import LoginForm from './LoginForm';


const dummy = {
  nickname: 'guya',
  Post: ['동구의 첫 Post'],
  Followings: ['상근'],
  Followers: ['재혁', '준혁'],
  login: false
}

function AppLayout({ children }) {

  /* render */
  return (
    <div>
      <Menu mode="horizontal" style={{ marginBottom: 12 }}>
        <Menu.Item key="home"><Link href="/"><a>노드버드</a></Link></Menu.Item>
        <Menu.Item key="profile"><Link href="/profile"><a>프로필</a></Link></Menu.Item>
        <Menu.Item key="mail">
          <Input.Search enterButton style={{ verticalAlign: 'middle' }} />
        </Menu.Item>
      </Menu>
      <Row gutter={12}>
        <Col xs={24} md={6} style={{ marginLeft: 12 }} >
          {dummy.login ? (
            <Card
              actions={[
                <div key="twit">짹짹<br />{dummy.Post.length}</div>,
                <div key="following">팔로잉<br />{dummy.Followings.length}</div>,
                <div key="follower">팔로워<br />{dummy.Followers.length}</div>
              ]}
            >
              <Card.Meta
                avatar={<Avatar>{dummy.nickname[0]}</Avatar>}
                title={dummy.nickname}
              />
            </Card>
          ) : (
              <LoginForm />
            )}
        </Col>
        <Col xs={24} md={12}>{children}</Col>
        <Col xs={24} md={6}></Col>
      </Row>
    </div>
  );
}

AppLayout.propTypes = {
  children: PropTypes.node
}

export default AppLayout;