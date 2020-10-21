import React from 'react';
import { useSelector } from 'react-redux';
import { Form, Input, Button } from 'antd';

function PostForm() {
  const { imagePaths } = useSelector(state => state.post);

  const onFinish = () => {

  };

  return (
    <Form encType="multipart/form-data" style={{ marginBottom: 20 }} onFinish={onFinish} >
      <Input.TextArea maxLength={140} placeholder="어떤 신기한 일이 있었나요?" />
      <div>
        <input type="file" multiple hidden />
        <Button>업로드</Button>
        <Button type="primary" htmlType="submit" style={{ float: 'right' }}>짹짹</Button>
      </div>
      <div>
        {imagePaths.map((value, index) => {
          return (
            <div key={index} style={{ display: 'inline-block' }}>
              <img src={'http://localhost:3065/' + value} alt={value} style={{ width: '200px' }} />
              <div>
                <Button>제거</Button>
              </div>
            </div>
          )
        })}
      </div>
    </Form>
  );
}

export default PostForm;
