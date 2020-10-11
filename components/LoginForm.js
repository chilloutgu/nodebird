import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import { Form, Input, Button } from 'antd';

/* custom hooks */
export const useInput = (initialValue = null) => {
  const [value, setValue] = useState(initialValue);
  const handler = useCallback(e => {
    setValue(e.target.value);
  }, []);
  return [value, handler];
};

function LoginForm() {
  /* states */
  const [id, onChangeId] = useInput('');
  const [password, onChangePassword] = useInput('');

  /* handlers */
  const onFinish = useCallback(() => {
    console.log('id :: ', id);
    console.log('password :: ', password);
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