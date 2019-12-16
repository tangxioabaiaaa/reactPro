import React from 'react'
import { Empty, Button } from 'antd'

const Forbidden: React.FC<{}> = ()=>{
  return (
    <Empty
      image="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576496915816&di=55c6885c23751a289b6806cce732c9a9&imgtype=0&src=http%3A%2F%2Ficweiliimg1.pstatp.com%2Fweili%2Fbl%2F384128225650147384.jpg"
      imageStyle={{
        height: 160,
        display: 'flex',
        justifyContent: 'center',
        marginTop: '100px'
      }}
      description={'非常抱歉，你无权访问该页面'}
      >
      <Button type="primary">返回首页</Button>
    </Empty>
  )
}

export default Forbidden;