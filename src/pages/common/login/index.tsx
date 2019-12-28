import React,{useRef, useState, useEffect} from 'react';
import { Form, Icon, Input, Checkbox, message } from 'antd';

import { useDispatch, useSelector } from 'react-redux'
import {requestUserLogin} from '../../../store/models/user'

import {useHistory} from 'react-router-dom'


import './style.scss'


const Login: React.FC<{}> = ()=>{
  
  // store操作
  const dispath = useDispatch();
  const userIsLogin = useSelector(state=>(state as any).getIn(["user","isLogin"]));

  // 路由
  const history = useHistory();

  // 创建ref
  const usernameRef = useRef(null!);
  const psdRef = useRef(null!);
  
  // 创建记住密码判定参数
  const [record, setRecord] = useState(false);

  // 路由跳转
  useEffect(() => {
    console.log(userIsLogin);
    if(userIsLogin){
      
      // 记住密码的操作
      if(record){
        const userName:string = (usernameRef as any).current.state.value;
        const password:string = (psdRef as any).current.state.value;
        localStorage.setItem('userInfo', JSON.stringify({userName,password}))
      }
      history.push('/home');
    }
  }, [userIsLogin])

  useEffect(() => {
    
    let userInfo = localStorage.getItem("userInfo");
    if(userInfo){
      const {userName,password} = JSON.parse(userInfo);
      console.log((usernameRef as any));
      (usernameRef as any).current.state.value = userName;
      (psdRef as any).current.state.value = password;
    }

    return () => {

    };
  },[])

  // 点击登录操作
  const handleAction = function handleAction(){
    const userName:string = (usernameRef as any).current.state.value;
    const password:string = (psdRef as any).current.state.value;
    if(userName && password){

      dispath(requestUserLogin(userName,password));

    }else{
      message.error('输入不能为空！')
    }
  }

  return (
    <div id="login">
      <div className="wrap">
        <div className="logo">
        </div>
        <Form className="login-form">
          <Form.Item>
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="text"
                placeholder="请输入账户名"
                ref={usernameRef}
              />
          </Form.Item>
          <Form.Item>
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="请输入密码"
                ref={psdRef}
              />
          </Form.Item>
          <Form.Item>
            <Checkbox onChange={function(e){
              setRecord(e.target.checked);
            }}>记住密码</Checkbox>
            <span className="login-form-button" onClick={handleAction}>
              登录
            </span>
          </Form.Item>
        </Form>
        <div className="bottom">
          <p>Copyright © www.xiaosdjaslkjdksajd.com, All Rights Reserved.</p>
          <p>安利撒大家来看撒娇的李克强文件旅客及其了记录卡撒就</p>
        </div>
      </div>
     
    </div>
  )
}

export default Login;