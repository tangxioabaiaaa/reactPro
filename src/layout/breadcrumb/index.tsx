import React from 'react'
import { Breadcrumb } from 'antd';
import {Link} from 'react-router-dom'
import RouteInfo from '../../utils/Hooks/useRouteInfo'

const AppBreadcrumb: React.FC<{}> = ()=>{
  const {breadcrumb,path} = RouteInfo();
  console.log(breadcrumb);
  
  if(!breadcrumb){
    return null;
  }
  return (
    <Breadcrumb style={{ margin: '16px 0' }}>
      {
        breadcrumb.map((item, index: number)=>(
          <Breadcrumb.Item key={index}>
            {item}
          </Breadcrumb.Item>
        ))
      }
    </Breadcrumb>
  )
}

export default AppBreadcrumb;