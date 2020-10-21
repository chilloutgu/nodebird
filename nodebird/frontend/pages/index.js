import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import { loginAction, logoutAction } from '../reducers/user';

function Home() {
  const { user, isLoggedIn } = useSelector(state => state.user);
  const { mainPosts } = useSelector(state => state.post);
  const dispatch = useDispatch();
  /* effects */
  useEffect(() => {
  }, []);

  /* render */
  return (
    <div>
      {isLoggedIn ? <div>로그인 했습니다. 안녕하세요 {user.nickname}님!</div> : <div>로그아웃 했습니다.</div>}
      {isLoggedIn && (
        <PostForm />
      )}
      {mainPosts.map(mainPost => {
        return (
          <PostCard post={mainPost} />
        );
      })}
    </div>
  )
}

export default Home;