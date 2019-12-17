import React,{useRef} from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

import './style.scss'




const Login: React.FC<{}> = ()=>{

  const usernameRef = useRef(null!);
  const psdRef = useRef(null!);


  const handleAction = function handleAction(){
    console.log((usernameRef as any).current.state.value);
    console.log((psdRef as any).current.state.value);
    const userName:string = (usernameRef as any).current.state.value;
    const password:string = (usernameRef as any).current.state.value;
    if(userName && password){

    }else{
      
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
            <Checkbox>记住密码</Checkbox>
            <span className="login-form-button" onClick={handleAction}>
              登录
            </span>
          </Form.Item>
        </Form>
        <div className="bottom">
          <p>Copyright © www.AxureUX.com, All Rights Reserved.</p>
          <p>助你快速打造友好美观的交互原型</p>
        </div>
      </div>
     
    </div>
  )
}

export default Login;