import React, { useCallback, useState, useEffect } from 'react'
import './style.scss'
import { Input, Menu, Dropdown, Icon, Button, Table } from 'antd'
import {useDispatch, useSelector} from 'react-redux'
import {requsetClientList} from '../../../store/models/client'

const area = ['全部', '福田区','罗湖区','南山区','宝安区','龙岗区','龙华区','光明新区','坪山新区',]
const level = ['全部', '关键客户','主要客户','普通客户']



const ClientDetail: React.FC<{}> = ()=>{
  const dispatch = useDispatch();
  const [areaVal, setAreaVal] = useState('全部');
  const [levelVal, setLevelVal] = useState('全部');
  // 筛选选择
  const areaSelectAction = useCallback(({key})=>{
    setAreaVal(area[key]);
  }, [])
  const levelSelectAction = useCallback(({key})=>{
    setLevelVal(level[key]);
  }, [])

  const areaMenu = (
    <Menu onClick={areaSelectAction}>
    {
      area.map((item, index)=>(
        <Menu.Item key={index}>
          {item}
        </Menu.Item>
      ))
    }
    </Menu>
  );
  
  const levelMenu = (
    <Menu onClick={levelSelectAction}>
    {
      level.map((item, index)=>(
        <Menu.Item key={index}>
          {item}
        </Menu.Item>
      ))
    }
    </Menu>
  );

  // 表格多选
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const onSelectChange = useCallback(selectedRowKeys=>{
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    setSelectedRowKeys(selectedRowKeys);
  }, []);

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  // 表格格式
  const columns = [
    {
      title: '公司名称',
      dataIndex: 'entityName',
      sorter: (a:any, b:any) => a.entityName[2].charCodeAt() - b.entityName[2].charCodeAt(),
      sortDirections: ['descend', 'ascend'],
      width: '20%',
      align: 'right'
    },
    {
      title: '所在地区',
      dataIndex: 'area.name',
      sorter: (a:any, b:any) => a.area.status - b.area.status,
    },
    {
      title: '级别',
      dataIndex: 'level.name',
      sorter: (a:any, b:any) => a.level.status - b.level.status,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: '联系人',
      dataIndex: 'legalPerson',
      sorter: (a:any, b:any) => a.legalPerson.charCodeAt() - b.legalPerson.charCodeAt(),
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: '联系方式',
      dataIndex: 'contactNumber'
    },
    {
      title: '来源',
      dataIndex: 'source'
    },
  ];
  
  // 表格数据
  const clientData = useSelector(state=>(state as any).getIn(['client','clientData']));
  console.log(clientData);
  // // 表格编辑
  // const [editingKey, setEditingKey] = useState('');
  // // 编辑
  // const isEditing = useCallback(record=>{
  //   return record.key === editingKey;
  // }, []);
  // // 取消
  // const cancel = useCallback(()=>{
  //   setEditingKey('');
  // }, []);
  // // 保存
  // const save = useCallback((form, key)=>{
  //   form.validateFields((error: any, row: any) => {
  //     if (error) {
  //       return;
  //     }
  //     const newData = [...data];
  //     const index = newData.findIndex(item => key === item.key);
  //     if (index > -1) {
  //       const item = newData[index];
  //       newData.splice(index, 1, {
  //         ...item,
  //         ...row,
  //       });
  //       //修改了数据
  //       setData(newData);
  //       setEditingKey('');
  //     } else {
  //       newData.push(row);
  //       setData(newData);
  //       setEditingKey('');
  //     }
  //   });
  // }, []);

  // 批量删除
  const deleteAction = useCallback(()=>{
    console.log(selectedRowKeys);
    
  }, [selectedRowKeys])

 
  useEffect(()=>{
    dispatch(requsetClientList({page:1,count:20}));
  }, [dispatch])

  return (
    <div id="client-detail">
      <div className="filter">
        <div className="filter-title">
          <span>数据筛选</span>
          <span>高级搜索</span>
        </div>
        <div className="filter-main">
          <div className="input">
            <span>输入查询：</span>
            <Input placeholder="公司名称/联系人" className="ipt"/>
          </div>
          <div className="input">
            <span>所在地区：</span>
            <Dropdown overlay={areaMenu} trigger={['click']}>
              <Button className="selectbtn">
                {areaVal} <Icon type="down" />
              </Button>
            </Dropdown>
          </div>
          <div className="input">
            <span>客户级别：</span>
            <Dropdown overlay={levelMenu} trigger={['click']}>
              <Button className="selectbtn">
                {levelVal} <Icon type="down" />
              </Button>
            </Dropdown>
          </div>
          <Button className="filter-btn" type="primary">
            <Icon type="search" />
            <span>查询</span>
          </Button>
          <Button className="filter-btn">
            <Icon type="undo" />
            <span>重置</span>
          </Button>
        </div>
      </div>
      <div className="table-wrap">
        <div className="table-title">
          <div className="table-edit">
            <span>数据列表</span>
            <Button type="danger" 
              disabled={selectedRowKeys.length === 0}
              onClick={deleteAction}
              >
                批量删除
              </Button>
          </div>
          <div className="table-btns">
            <Button className="table-btn">
              <Icon type="upload" />
              <span>导出</span>
            </Button>
            <Button className="table-btn">
              <Icon type="download" />
              <span>导入</span>
            </Button>
            <Button className="table-btn" type="primary">
              <Icon type="plus" />
              <span>添加</span>
            </Button>
          </div>
        </div>
        <div className="table-main">
          <Table rowSelection={rowSelection} columns={columns} dataSource={clientData} />
        </div>
      </div>
    </div>
  )
}

export default ClientDetail;
