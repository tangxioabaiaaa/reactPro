import React, { useCallback, useState } from 'react'
import { Select, Table, Button } from 'antd';
import './style.scss'
const { Option } = Select;


const columns = [
  {
    title: '名称',
    dataIndex: 'name',
    align: 'center'
  },
  {
    title: '说明',
    dataIndex: 'desc',
    align: 'center'
  },
  {
    title: '地区',
    dataIndex: 'area',
    align: 'center'
  },
  {
    title: '参与人数',
    dataIndex: 'num',
    align: 'center'
  },
  {
    title: '开始时间',
    dataIndex: 'startTime',
    align: 'center'
  },
  {
    title: '结束时间',
    dataIndex: 'endTime',
    align: 'center'
  },
  {
    title: '状态',
    dataIndex: 'status',
    align: 'center'
  },
];

const data = [
  {
    key: '1',
    name: '实发额活动',
    desc: '的沙发沙发垫付',
    area: '深圳',
    num: 342,
    startTime: '2017-04-12',
    endTime: '2017-06-22',
    status: '已结束'
  },
  {
    key: '2',
    name: '实发额活动',
    desc: '的沙发沙发垫付',
    area: '深圳',
    num: 342,
    startTime: '2017-04-12',
    endTime: '2017-06-22',
    status: '正常'
  },
  {
    key: '3',
    name: '实发额活动',
    desc: '的沙发沙发垫付',
    area: '上海',
    num: 342,
    startTime: '2017-04-12',
    endTime: '2017-06-22',
    status: '待发布'
  },
  {
    key: '4',
    name: '实发额活动',
    desc: '的沙发沙发垫付',
    area: '上海',
    num: 342,
    startTime: '2017-04-12',
    endTime: '2017-06-22',
    status: '正常'
  },
  {
    key: '5',
    name: '实发额活动',
    desc: '的沙发沙发垫付',
    area: '深圳',
    num: 342,
    startTime: '2017-04-12',
    endTime: '2017-06-22',
    status: '正常'
  },
  {
    key: '6',
    name: '实发额活动',
    desc: '的沙发沙发垫付',
    area: '深圳',
    num: 342,
    startTime: '2017-04-12',
    endTime: '2017-06-22',
    status: '待发布'
  },
  {
    key: '7',
    name: '实发额活动',
    desc: '的沙发沙发垫付',
    area: '广州',
    num: 342,
    startTime: '2017-04-12',
    endTime: '2017-06-22',
    status: '已结束'
  },
];

const ActivityList: React.FC<{}> = ()=>{

  const [selectArea, setSelectArea] = useState('');
  const [selectStatus, setSelectStatus] = useState('');

  const handleAreaChange = useCallback((value)=>{
    console.log(value);
    setSelectArea(value);
  }, [])
  const handleStatusChange = useCallback((value)=>{
    console.log(value);
    setSelectStatus(value);
  }, [])

  const handleInquiry = useCallback(()=>{

  }, [])
  const handleReset = useCallback(()=>{

  }, [])

  return (
    <div id="activity-list">
      <div className="activity-select">
        <Select placeholder="选择地区" style={{ width: 180 }} onChange={handleAreaChange}>
          <Option value="上海">上海</Option>
          <Option value="北京">北京</Option>
          <Option value="深圳">深圳</Option>
          <Option value="广州">广州</Option>
        </Select>
        <Select placeholder="选择状态" style={{ width: 180, marginLeft: 40 }} onChange={handleStatusChange}>
          <Option value="正常">正常</Option>
          <Option value="已结束">已结束</Option>
          <Option value="待发布">待发布</Option>
        </Select>
        <Button className="inquiry" type="primary" onClick={handleInquiry}>查询</Button>
        <Button className="reset" onClick={handleReset}>重置</Button>
      </div>
      <div className="table">
        <Table className="tab" columns={columns} dataSource={data} />
      </div>
    </div>
  )
}

export default ActivityList;