import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Avatar, Button } from 'antd';
import { logoutAction } from '../reducers/user';

function UserProfile() {
  const { user } = useSelector(state => state.user);
  const dispatch = useDispatch();

  const onClickLogout = iseCacllback(() => {
    dispatch(logoutAction());
  }, []);

  return (
    <div>
      <Card
        actions={[
          <div key="twit">짹짹<br />{user.Posts.length}</div>,
          <div key="following">팔로잉<br />{user.Followings.length}</div>,
          <div key="follower">팔로워<br />{user.Followers.length}</div>
        ]}
      >
        <Card.Meta
          avatar={<Avatar>{user.nickname[0]}</Avatar>}
          title={user.nickname}
        />
      </Card>
      <Button type="primary" onClick={onClickLogout}>로그아웃</Button>
    </div>
  );
}

export default UserProfile;
