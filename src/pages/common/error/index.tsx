import React from 'react'
import { Empty, Button } from 'antd'

const Error: React.FC<{}> = ()=>{
  return (
    <Empty
      image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
      imageStyle={{
        height: 140,
        display: 'flex',
        justifyContent: 'center',
        marginTop: '120px'
      }}
      description={'非常抱歉，出错了'}
      >
      <Button type="primary">返回首页</Button>
    </Empty>
  )
}

export default Error;