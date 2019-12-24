import React from 'react'
import { Breadcrumb } from 'antd';
import RouteInfo from '../../utils/Hooks/useRouteInfo'

const AppBreadcrumb: React.FC<{}> = ()=>{
  const {breadcrumb} = RouteInfo();
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