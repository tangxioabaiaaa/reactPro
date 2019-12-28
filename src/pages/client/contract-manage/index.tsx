import React, { useState, useCallback } from 'react'
import './style.scss'
import { Table, Button, Input, DatePicker } from 'antd';
const { Search } = Input;



const toparr = [
  {
    name: '今日合同数',
    color: 'rgb(88,163,247)'
  },
  {
    name: '近7日合同总数',
    color: 'rgba(254,192,61,1)'
  },
  {
    name: '近30日合同总数',
    color: 'rgba(82,193,245,1)'
  }, {
    name: '全部合同数',
    color: 'rgba(251, 98, 96, 1)'
  },
]

const columns = [
  {
    title: '合同ID',
    dataIndex: 'name',
    align: 'center'
  },
  {
    title: '合同编号',
    dataIndex: 'age',
    align: 'center'
  },
  {
    title: '合同名称',
    dataIndex: 'address',
    align: 'center'
  },
  {
    title: '发起人手机号',
    dataIndex: 'address',
    align: 'center'
  },
  {
    title: '完成时间',
    dataIndex: 'address',
    align: 'center'
  },
  {
    title: '合同来源',
    dataIndex: 'address',
    align: 'center'
  },
  {
    title: '状态',
    dataIndex: 'address',
    align: 'center'
  },
  {
    title: '操作',
    dataIndex: 'address',
    align: 'center'
  }
];

const pagination = {
  pageSize: 10
}

const data: any[] | undefined = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London ${i}`,
  });
}

const ContractManage: React.FC<{}> = () => {

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);

  const start = useCallback(
    () => {
      setLoading(true)
      // ajax request after empty completing
      setTimeout(() => {
        setSelectedRowKeys([]);
        setLoading(false)
      }, 1000);
    },
    [],
  );

  const onSelectChange = useCallback(
    (selectedRowKeys) => {
      console.log('selectedRowKeys changed: ', selectedRowKeys);
      setSelectedRowKeys(selectedRowKeys)
    },
    [],
  );

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;

  return (
    <div className="contract-manage">
      <div className="contract-show">
        {
          toparr.map((item) => {
            return (
              <div className="wrap" style={{ backgroundColor: item.color }}>
                <div className="data">2000</div>
                <div className="type">{item.name}</div>
              </div>
            )
          })
        }
      </div>
      <div className="search">
        <div className="search-top">
          <span>查询条件</span>
          <Button size={"small"}>高级检索</Button>
        </div>

        <div className="search-bottom">
          <div>
            <span>合同编号 ：</span>
            <Search
              onSearch={value => console.log(value)}
              style={{ width: 120 }}
              size="large"
            />
          </div>
          <div>
            <span>发起人 ：</span>
            <Search
              placeholder="发起人手机号"
              onSearch={value => console.log(value)}
              style={{ width: 150 }}
              size="large"
            />
          </div>
          <div>
            <span>提交时间 ：</span>
            <DatePicker placeholder="请选择日期" />
          </div>
        </div>
      </div>
      <div className="table-list">
        {/* <div style={{ marginBottom: 16   }} > */}
        {/* <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>
            Reload
          </Button> */}
        {/* <span style={{ marginLeft: 8 }}>
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
          </span> */}
        {/* </div> */}
        <Table rowSelection={rowSelection} columns={columns} dataSource={data} bordered={true} pagination={pagination} />
      </div>
    </div>
  )
}

export default ContractManage;

