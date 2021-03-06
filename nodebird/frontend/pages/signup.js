import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input, Checkbox, Button } from 'antd';
import { useInput } from '../components/LoginForm';
import { signupAction } from '../reducers/user';

function Signup() {

  /* states */
  const [id, onChangeId] = useInput('');
  const [nickname, onChangeNickname] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [term, setTerm] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [termError, setTermError] = useState(false);

  const dispatch = useDispatch();
  const { signupData } = useSelector(state => state.user);

  /* handlers */
  const onFinish = useCallback(() => {
    if (password !== passwordCheck) {
      setPasswordError(true);
      return;
    }

    if (!term) {
      setTermError(true);
      return;
    }
    /* signup logic */
    dispatch(signupAction({ id, password, nickname }));

  }, [password, passwordCheck, term]);

  console.log('signupData :: ', signupData);

  const onChangePasswordCheck = useCallback(e => {
    setPasswordCheck(e.target.value);
    setPasswordError(password !== e.target.value);
  }, [password]);

  const onChangeTerm = useCallback(e => {
    setTerm(e.target.checked);
    setTermError(!e.target.checked);
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