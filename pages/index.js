import React, { useCallback } from 'react';
import { Form, Input, Button, Card, Avatar } from 'antd';
import { RetweetOutlined, HeartOutlined, MessageOutlined, EllipsisOutlined } from '@ant-design/icons'

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

function Home() {

  /* handlers */
  const onFinish = useCallback(() => {

  }, []);

  /* render */
  return (
    <div>
      {dummy.login && (
        <Form encType="multipart/form-data" style={{ marginBottom: 20 }} onFinish={onFinish} >
          <Input.TextArea maxLength={140} placeholder="어떤 신기한 일이 있었나요?" />
          <div>
            <input type="file" multiple hidden />
            <Button>업로드</Button>
            <Button type="primary" htmlType="submit" style={{ float: 'right' }}>짹짹</Button>
          </div>
          <div>
            {dummy.imagePaths.map((value, index) => {
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
      )}
      {dummy.mainPosts.map((c) => {
        return (
          <Card
            key={+c.createdAt}
            cover={c.img && <img alt="example" src={c.img} />}
            actions={[
              <RetweetOutlined />,
              <HeartOutlined />,
              <MessageOutlined />,
              <EllipsisOutlined />
            ]}
            extra={<Button>팔로우</Button>}
          >
            <Card.Meta
              avatar={<Avatar>{c.User.nickname[0]}</Avatar>}
              title={c.User.nickname}
              description={c.content}
            />
          </Card>
        );
      })}
    </div>
  )
}

export default Home;