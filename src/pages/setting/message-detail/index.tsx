import React,{useCallback} from 'react'
import { Button } from 'antd';
import {Link} from 'react-router-dom'
import './style.scss'

const MessageDetail: React.FC<{}> = () => {
  
  // const Goback = useCallback((e) => {
  //   console.log(e);
  // },[])

  return (
    <div className='msg-detail'>
      
      <div className='msg-header'>
        <h1 className='msg-title'>域名隐私保护服务暂停通知 </h1>
        <p>2018-05-25 &nbsp; &nbsp;14:19:20</p>
      </div>
      <div className='msg-con'>
        <p>
          尊敬的客户：您好！
        </p>
        <p>
        根据ICANN（互联网名称与数字地址分配机构）《通用顶级域名注册数据临时政策细则（Temporary Specification for gTLD Registration Data）》和欧盟通用数据保护条例（GDPR）合规要求，自2018年5月25日起，阿里云的域名WHOIS信息公开查询结果中将不再显示域名注册人/注册机构的名称，以及域名注册人/注册机构、管理联系人和技术联系人的联系信息。
        </p>
        <p>
        鉴于以上调整措施生效后，域名注册信息将默认得到保护，阿里云域名隐私保护服务将自2018年5月25日起暂停服务。 
        </p>
      </div>
      <Link to='/setting/message_new'>
          <Button size='large' type='primary' className='msg-con-btn'>返回</Button>
      </Link>
      <div>
     </div>
    </div>
  )
}

export default MessageDetail;