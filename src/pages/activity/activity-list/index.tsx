import React, { useCallback } from 'react'
import { Select } from 'antd';
import './style.scss'
const { Option } = Select;

const ActivityList: React.FC<{}> = ()=>{
  const handleChange = useCallback(()=>{

  }, [])

  return (
    <div id="activity-list">
      <div className="activity-select">
        <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
      </div>
    </div>
  )
}

export default ActivityList;