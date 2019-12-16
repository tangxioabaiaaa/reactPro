import React from 'react'
import { Spin, Icon } from 'antd';

const Loading: React.FC<{}> = ()=>{
  const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

  return (
    <div className="loading">
      <Spin indicator={antIcon} size="large" />
    </div>
  )
}

export default Loading;
