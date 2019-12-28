import React, { useState } from 'react'
import './style.scss'

const ContractManage: React.FC<{}> = ()=>{
  const [status, setStatus] = useState('未知');


  return (
    <div className="contract-detail">
    

    
    <div className="status">


      {/* 当前状态：{state.status} */}
    </div>
    
    </div>
  )
}

export default ContractManage;