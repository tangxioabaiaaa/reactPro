import React from 'react'
import './style.scss'
const EmployeeAdd: React.FC<{}> = ()=>{
  return (

    <div className='employee-header'>
        <span>新建消息</span>
        <span><i>*</i>为必填项</span>
    </div>
    // <div>新增员工</div>
  )
}

export default EmployeeAdd;