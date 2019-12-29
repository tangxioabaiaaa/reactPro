import React, { useState, useCallback } from 'react'
import './style.scss'
import { Icon, Table } from 'antd';


const columns = [
  {
    title: '合同名称',
    dataIndex: 'name',
    align: 'center'
  },
  {
    title: '合同编号',
    dataIndex: 'id',
    align: 'center'
  },
  {
    title: '合同状态',
    dataIndex: 'status',
    align: 'center'
  },
  {
    title: '签署人',
    dataIndex: 'person',
    align: 'center'
  },
  {
    title: '订单来签署平台',
    dataIndex: 'where',
    align: 'center'
  },
  {
    title: '提交时间',
    dataIndex: 'date',
    align: 'center'
  }
];

const columns2 = [
  {
    title: '合同名称',
    dataIndex: 'name',
    align: 'center'
  },
  {
    title: '合同编号',
    dataIndex: 'id',
    align: 'center'
  },
  {
    title: '合同状态',
    dataIndex: 'status',
    align: 'center'
  },
  {
    title: '签署人',
    dataIndex: 'person',
    align: 'center'
  },
  {
    title: '订单来签署平台',
    dataIndex: 'where',
    align: 'center'
  },
  {
    title: '提交时间',
    dataIndex: 'date',
    align: 'center'
  }
];

const columns3 = [
  {
    title: '合同名称',
    dataIndex: 'name',
    align: 'center'
  },
  {
    title: '合同编号',
    dataIndex: 'id',
    align: 'center'
  },
  {
    title: '合同状态',
    dataIndex: 'status',
    align: 'center'
  },
  {
    title: '签署人',
    dataIndex: 'person',
    align: 'center'
  },
  {
    title: '订单来签署平台',
    dataIndex: 'where',
    align: 'center'
  },
  {
    title: '提交时间',
    dataIndex: 'date',
    align: 'center'
  }
];

const data: any[] | undefined = [];
data.push({
  key: 0,
  name: 'Edward King',
  id: '322788209',
  status: '已完成',
  person: 'lhs',
  where: 'china',
  date: '1032-39-39'
});

const ContractManage: React.FC<{}> = () => {
  const [status, setStatus] = useState('未知');


  return (
    <div className="contract-detail">

      <div className="contract-status">
        当前状态：{status}
      </div>

      <div className="contract-info wrap">
        <Icon type="smile" theme="twoTone" /> <span>合同基本信息</span>

        <div className="info-content">
          <Table columns={columns} dataSource={data} bordered={true} pagination={false} />
        </div>
      </div>


      <div className="signed-info wrap">
        <Icon type="heart" theme="twoTone" twoToneColor="#eb2f96" /><span>签署信息</span>
        <div className="signed-content">
          <img src="/contract.jpg" alt="" />
        </div>
      </div>

      <div className="signed-event wrap">
      <Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" /><span>签署事件</span>
        <div className="event-content">
          <Table columns={columns2} dataSource={data} bordered={true} pagination={false} />
        </div>
      </div>

      <div className="user-certificate wrap">
      <Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" /><span>用户证书</span>
        <div className="certificate-content">
          <Table columns={columns3} dataSource={data} bordered={true} pagination={false} />
        </div>
      </div>


    </div>
  )
}

export default ContractManage;
