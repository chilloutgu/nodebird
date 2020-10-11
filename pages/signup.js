import React, { useState, useCallback } from 'react';
import { Form, Input, Checkbox, Button } from 'antd';
import { useInput } from '../components/LoginForm';

function Signup() {

  /* states */
  const [id, onChangeId] = useInput('');
  const [nickname, onChangeNickname] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [term, setTerm] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [termError, setTermError] = useState(false);

  /* handlers */
  const onFinish = useCallback(() => {
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }

    if (!term) {
      setTermError(true);
      return;
    }
  }, [password, passwordCheck, term]);

  const onChangePasswordCheck = useCallback(({ target: { value } }) => {
    setPasswordError(value !== password);
    setPasswordCheck(value);
  }, [password]);

  const onChangeTerm = useCallback((e) => {
    setTermError(false);
    setTerm(e.target.checked);
  }, []);

  return (
    <>
      <Form onFinish={onFinish} style={{ padding: 8 }}>
        <div>
          <label htmlFor="user-id">아이디</label>
          <Input name="user-id" value={id} onChange={onChangeId} required />
        </div>
        <div>
          <label htmlFor="user-nickname">닉네임</label>
          <Input name="user-nickname" value={nickname} onChange={onChangeNickname} required />
        </div>
        <div>
          <label htmlFor="user-pwd">비밀번호</label>
          <Input name="user-password" type="password" value={password} onChange={onChangePassword} required />
        </div>
        <div>
          <label htmlFor="user-password-check">비밀번호 체크</label>
          <Input name="user-password-check" type="password" value={passwordCheck} onChange={onChangePasswordCheck} required />
          {passwordError && (<div style={{ color: 'red' }}>비밀번호가 일치해야 합니다.</div>)}
        </div>
        <div>
          <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>이용약관에 동의합니다.</Checkbox>
          {termError && (<div style={{ color: 'red' }}>약관에 동의해야 합니다.</div>)}
        </div>
        <div style={{ marginTop: 10 }}>
          <Button type="primary" htmlType="submit">가입하기</Button>
        </div>
      </Form>
    </>
  );
}

export default Signup;