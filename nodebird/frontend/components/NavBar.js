import React from 'react';
import Link from 'next/link';
import { Menu, Input } from 'antd';

function NavBar() {

  return (
    <Menu mode="horizontal" style={{ marginBottom: 12 }}>
      <Menu.Item key="home"><Link href="/"><a>노드버드</a></Link></Menu.Item>
      <Menu.Item key="profile"><Link href="/profile"><a>프로필</a></Link></Menu.Item>
      <Menu.Item key="mail">
        <Input.Search enterButton style={{ verticalAlign: 'middle' }} />
      </Menu.Item>
    </Menu>
  );
}

export default NavBar;