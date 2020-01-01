import React, { useState,useCallback, useRef, useEffect } from 'react'
// import RichEditor from './children/rich-editor'
import {Link} from 'react-router-dom'

import { Input, TreeSelect ,Modal, Button,Checkbox} from 'antd';

// import messageDetail from '../message-detail'
// import {useDispatch, useSelector} from 'react-redux'
import './style.scss'


const {TextArea} = Input



const treeData = [
  {
    title: 'Node1',
    value: '0-0',
    key: '0-0',
  },
  {
    title: 'Node2',
    value: '0-1',
    key: '0-1',
  },
];

 


const MessageNew: React.FC<{}> = () => {
 
  const [visible, setVisible] = useState(false);

  // const textRef = useRef<string>(null!);

  const [teartVal,setTearVal] = useState('')
 
  const handleCancel = useCallback(() => {
    setVisible(false)
    console.log('取消');
    // dispatch(requestAddCategory(textRef.current));
  }, []);

  

  const handleOK = useCallback(()=>{
    console.log('添加数据成功');
    setVisible(false)
  }, []);

  const onChange = useCallback((e,...rest) => {
    console.log(`checked = ${e.target.checked}`);
    
},[])
  useEffect(() => {
    var editor = new window.Simditor({
      textarea : window.$('#editor'),
      placeholder: '写点什么...',
      defaultImage: '/static/home/images/logo.png',
      imageButton: ['upload'],

  });
  }, [])

  // 文本域数据绑定事件
  // const handleChange = useCallback((ev: React.ChangeEvent<HTMLInputElement>)=>{
  //   setTearVal(ev.target.value);
  // }, []);


  return (
    <div className='message-new'>
      <div className='new-header'>
        <span>新建消息</span>
        <span><i>*</i>为必填项</span>
      </div>
      <div className='new-con'>
        <p>
          <span><i className='new-i'>*</i>消息栏目</span>
          <TreeSelect
            style={{ width: '55%' }}
            dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
            treeData={treeData}
            placeholder="请选择栏目消息"
            treeDefaultExpandAll
            allowClear
          />
           <Button type="primary" onClick={()=>setVisible(true)}>添加栏目</Button>
          <Modal
          title="添加栏目"
            visible={visible}
            onCancel={handleCancel}
            onOk={handleOK}
            maskClosable={true}
        >
            <p>
              <span> <i>*</i>栏目名称 </span>
              <Input style={{width:'60%',marginLeft:'15px'}} placeholder='请填写栏目名称'/>
            </p>
           
            <p className='modal-txt'>
               <span>栏目描述</span>
              {/* <TextArea value={teartVal} onChange={handleChange}/> */}
          </p>
        </Modal>
        </p>
        <p>
        <span><i className='new-i'>*</i>消息标题</span>
          <Input style={{width:'53.5%' }} placeholder='请填写消息标题'/>
        </p>
        
        <p>
        <span><i className='new-i'>*</i>消息对象</span>
          <TreeSelect
            style={{ width: '55%' }}
            dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
            treeData={treeData}
            placeholder="请选择接收对象"
            treeDefaultExpandAll
            allowClear
          />
        </p>
        <p>
          <span><i className='new-i'>*</i>消息内容</span>
          <textarea id="editor" placeholder="Balabala"    ></textarea>
       
        </p>
      </div>
      <div className='message-footer'>
        <span className='alertmsg'>提醒方式</span>
        <Checkbox  onChange={onChange}>站内信</Checkbox>
        <Checkbox onChange={onChange}>邮件</Checkbox>
        <Checkbox onChange={onChange}>邮件</Checkbox>
  
        <span>(短信可用数:&nbsp;&nbsp;&nbsp;1000条)</span>
        
      </div>
      <div className="btn">
        <Button type="primary" className='one' size='large'>保存</Button>
        <Button type="primary" className='one' size='large'>发布</Button>
        <Link to='/setting/message_detail'>
              <Button type="primary" className='one' size='large'>预览</Button>
        </Link>
        <Button type='primary' className='one' size='large'>重置</Button>
   
        {/* #1890ff; */}
      </div>
     
    </div>
  )
}

export default MessageNew;