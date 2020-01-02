import React, {useCallback} from 'react'
import { Layout, Menu, Icon } from 'antd';
import {useHistory} from 'react-router-dom'
import SiderConfig from '../../config/sider.config'
import useRouteInfo from '../../utils/Hooks/useRouteInfo'
import './style.scss'
const { SubMenu } = Menu;
const { Sider } = Layout;

const AppSlide: React.FC<{}> = ()=>{
  // 切换路由
  const history = useHistory();
  const itemClickAction = useCallback((path: string)=>{
    history.push(path);
  }, [history])
  const {ids} = useRouteInfo();
  
  
  return (
    <Sider width={180} style={{ background: '#fefefe' }} className="app-slide">

      {/* <Menu
        mode="inline"
        defaultSelectedKeys={[ids[0]]}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="home" onClick={()=>history.push('/home')}>
        <span>
        <Icon className="icon" type="home" />
        首页
      </span>
        </Menu.Item>
      </Menu> */}

      <Menu
        mode="inline"
        defaultSelectedKeys={[ids[1]]}
        defaultOpenKeys={[ids[0]]}
        style={{ height: '100%', borderRight: 0,background: '#fefefe' }}
      >
      {
        SiderConfig.map(configItem=>(
          <SubMenu
            key={configItem.id}
            title={
              <span>
                <Icon className="icon" type={configItem.icon} />
                {configItem.title}
              </span>
            }
          >
          {
            configItem.children.map(item=>(
              <Menu.Item key={item.id}
                onClick={()=>itemClickAction(item.path)}
                >
                {item.title}
              </Menu.Item>
            ))
          }
          </SubMenu>
        ))
      }
      </Menu>
    </Sider>
  )
}

export default AppSlide;