import React from 'react';
import { Button, List, Card } from 'antd';
import { StopOutlined } from '@ant-design/icons';
import ProfileEditForm from '../components/ProfileEditForm';

function Profile() {

  return (
    <div>
      <ProfileEditForm />
      <List
        style={{ marginBottom: '20px' }}
        grid={{ gutter: 4, xs: 2, md: 3 }}
        size="small"
        header={<div>팔로워 목록</div>}
        loadMore={<Button style={{ width: '100%' }}>더보기</Button>}
        bordered
        dataSource={['guya', 'hello', 'chillout']}
        renderItem={item => (<List.Item style={{ marginTop: '20px' }}>
          <Card actions={[<StopOutlined />]}>
            <Card.Meta
              description={item}
            />
          </Card>
        </List.Item>)}
      />
      <List
        style={{ marginBottom: '20px' }}
        grid={{ gutter: 4, xs: 2, md: 3 }}
        size="small"
        header={<div>팔로잉 목록</div>}
        loadMore={<Button style={{ width: '100%' }}>더보기</Button>}
        bordered
        dataSource={['guya', 'hello', 'chillout']}
        renderItem={item => (<List.Item style={{ marginTop: '20px' }}>
          <Card actions={[<StopOutlined />]}>
            <Card.Meta
              description={item}
            />
          </Card>
        </List.Item>)}
      />
    </div>
  );
}

export default Profile;