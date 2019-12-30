import React from 'react'
import {Layout, Menu, Icon, Avatar} from 'antd';
import './style.scss'
const {Header} = Layout;

const AppHeader: React.FC<{}> = ()=>{
  return (
    <Header className="app-header" style={{background: 'rbg(61,74,93)'}}>
      <div className="logo" ></div>
      <Menu
        className="menu"
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">
          <Avatar icon="user" />
          <span className="user">admin</span>
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="poweroff" />
          <span className="logout">退出登录</span>
        </Menu.Item>
        
      </Menu>
    </Header>
  )
}

export default AppHeader;