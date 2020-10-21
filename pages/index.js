import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';

function Home() {
  const { isLoggedIn, user } = useSelector(state => state.user);
  const dispatch = useDispatch();
  /* effects */
  useEffect(() => {
  }, []);

  /* handlers */
  const onFinish = useCallback(() => {

  }, []);

  /* render */
  return (
    <div>
      {user ? <div>로그인 했습니다. : {user.nickname}</div> : <div>로그아웃 했습니다.</div>}
      {isLoggedIn && (
        <PostForm />
      )}
      {dummy.mainPosts.map(mainPost => {
        return (
          <PostCard post={mainPost} />
        );
      })}
    </div>
  )
}

export default (Home);

const dummy = {
  login: true,
  imagePaths: [],
  mainPosts: [{
    User: {
      id: 1,
      nickname: 'guya'
    },
    content: 'new Post!',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdQ4sfPH_1NVTkLGd1kN_fUMbybg5ySOORwQ&usqp=CAU'
  }]
}