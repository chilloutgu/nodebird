import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button, Avatar } from 'antd';
import { RetweetOutlined, HeartOutlined, MessageOutlined, EllipsisOutlined } from '@ant-design/icons';

PostCard.propTypes = {
  post: PropTypes.shape({
    User: PropTypes.shape({
      nickname: PropTypes.string
    }),
    content: PropTypes.string,
    img: PropTypes.string,
    createdAt: PropTypes.object
  })
};

function PostCard({ post }) {

  return (
    <Card
      key={+post.createdAt}
      cover={post.img && <img alt="example" src={post.img} />}
      actions={[
        <RetweetOutlined />,
        <HeartOutlined />,
        <MessageOutlined />,
        <EllipsisOutlined />
      ]}
      extra={<Button>팔로우</Button>}
    >
      <Card.Meta
        avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
        title={post.User.nickname}
        description={post.content}
      />
    </Card>
  )
}

export default PostCard;

