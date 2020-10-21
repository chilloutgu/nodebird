import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import { Form, Input, Button } from 'antd';
import { loginAction } from '../reducers/user';

/* custom hooks */
export const useInput = initialState => {
  const [state, setState] = useState(initialState);
  const onChange = useCallback(e => setState(e.target.value), []);

  return [state, onChange];
}

function LoginForm() {
  /* states */
  const [id, onChangeId] = useInput('');
  const [password, onChangePassword] = useInput('');

  const dispatch = useDispatch();

  /* handlers */
  const onFinish = useCallback(() => {
    dispatch(loginAction());
  }, [id, password]);

  /* render */
  return (
    <Form onFinish={onFinish}>
      <div>
        <label htmlFor="user-id">아이디</label>
        <Input name="user-id" value={id} onChange={onChangeId} required />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <Input name="uer-password" value={password} onChange={onChangePassword} required />
      </div>
      <div>
        <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
        <Button><Link href="/signup"><a>회원가입</a></Link></Button>
      </div>
    </Form>
  );
}

export default LoginForm;