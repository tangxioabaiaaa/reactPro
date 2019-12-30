import React, { useCallback, useState, useRef } from 'react'
import { Input, Button, Upload, Icon, message, Select, DatePicker } from 'antd';
import './style.scss'
import Api from '../../../utils/api'
import Http from  '../../../utils/request'

const { Option } = Select;

const areaMenu = ['福田区','罗湖区','南山区','宝安区','龙岗区','龙华区','光明新区','坪山新区']
const industryMenu = ['互联网','金融','医疗','建筑','服务','其他'];
const levelMenu = ['关键客户','主要客户','普通客户']

function getBase64(img: any, callback: any){
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file: any) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('你只能上传JPG/PNG的文件!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('图片必须小于2MB!');
  }
  return isJpgOrPng && isLt2M;
}


const ClientAdd: React.FC<{}> = ()=>{
  // 行业类型
  const [industryVal, setIndustryVal] = useState('');
  // 地区
  const [areaVal, setAreaVal] = useState('');
  // 客户级别
  const [levelVal, setLevelVal] = useState('');
  // 日期
  const [dateVal, setDateVal] = useState('');
  // 图片地址
  const [imageUrl, setImageUrl] = useState('');
  // 文字长度
  const [textNum, setTextNum] = useState(0);
  // loading
  const [loading, setLoading] = useState(false);

  // ref
  const companyRef = useRef<Input | null>(null);
  const contactRef = useRef<Input | null>(null);
  const positionRef = useRef<Input | null>(null);
  const mobilePhoneRef = useRef<Input | null>(null);
  const qqRef = useRef<Input | null>(null);
  const emailRef = useRef<Input | null>(null);
  const wxRef = useRef<Input | null>(null);
  const addressRef = useRef<Input | null>(null);
  const phoneRef = useRef<Input | null>(null);
  const faxRef = useRef<Input | null>(null);
  const urlRef = useRef<Input | null>(null);
  const textRef = useRef<HTMLTextAreaElement | null>(null);
  const codeRef = useRef<Input | null>(null);
  const remarkRef = useRef<Input | null>(null);

  const areaSelectAction = useCallback((value)=>{
    setAreaVal(value);
  }, [])
  const industrySelectAction = useCallback((value)=>{
    setIndustryVal(value);
  }, [])
  const handleLevelChange = useCallback((value)=>{
    setLevelVal(value);
  }, [])
  

  const handleChange = useCallback((info) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (imageUrl: any)=>{
        setImageUrl(imageUrl);
        setLoading(false);
      });
    }
  }, []);

  const inputAction = useCallback(()=>{
    const length = textRef.current!.value.length;
    if(length>200){
      textRef.current!.value = textRef.current!.value.substring(0, 200);
    }
    setTextNum(length);
  }, [])

  const selectDateAction = useCallback((date, dateString)=>{
    setDateVal(dateString)
  }, [])

  const submitAction = useCallback(async ()=>{
    const entityName = companyRef.current!.clearableInput.props.value;
    const legalPerson = contactRef.current!.clearableInput.props.value;
    const position = positionRef.current!.clearableInput.props.value;
    const contactNumber = mobilePhoneRef.current!.clearableInput.props.value;
    const qq = qqRef.current!.clearableInput.props.value;
    const email = emailRef.current!.clearableInput.props.value;
    const wx = wxRef.current!.clearableInput.props.value;

    const unitAddress = addressRef.current!.clearableInput.props.value;
    const unitPhone = phoneRef.current!.clearableInput.props.value;
    const unitFax = faxRef.current!.clearableInput.props.value;
    const unitUrl = urlRef.current!.clearableInput.props.value;
    const unitIntro = textRef.current!.value;

    const unitId = codeRef.current!.clearableInput.props.value;
    const unitMark = remarkRef.current!.clearableInput.props.value;
    const unitType = industryVal;
    const unitArea = areaVal;
    const unitLevel = levelVal;
    const date = dateVal;
    const logo = imageUrl;
    if(!entityName || !unitType || !unitArea || !legalPerson || !contactNumber || !email || !unitAddress || !logo || !unitPhone || !unitId || !unitLevel || !date){
      message.error('信息未填写完整！');
      return
    }
    // 保存信息
    const result = await Http.post(Api.ADD_CUSTOMER,{
      entityName,
      legalPerson,
      position,
      contactNumber,
      qq,
      email,
      wx,
      unitAddress,
      unitPhone,
      unitFax,
      unitUrl,
      unitIntro,
      unitId,
      unitMark,
      unitType,
      unitArea,
      unitLevel,
      date,
      // logo
    })
    const {data} = result;
    if(data.code === 0){
      message.success('新增客户成功');
    } else {
      message.error('新增客户失败，请重试');
    }
    
    
  }, [industryVal, areaVal, levelVal, dateVal, imageUrl])

  const uploadButton = (
    <div>
      <Icon type={loading ? 'loading' : 'plus'} />
      <div className="ant-upload-text">上传图片</div>
    </div>
  );
  
  return (
    <div id="client-add">
      <div className="add-title">
        <h4>新增客户</h4>
        <span><i>*</i>为必填项</span>
      </div>
      <div className="content">
        <section className="form">
          <h4>基础信息</h4>
          <div className="iptgroup">
            <div className="aipt">
              <div className="head"><i>*</i>公司名称</div>
              <Input className="ipt" ref={companyRef} placeholder="请填写公司名称" />
            </div>
            <div className="aipt">
              <div className="head"><i>*</i>行业类型</div>
              <Select style={{ width: 305 }} onChange={industrySelectAction} placeholder="请选择行业类型">
              {
                industryMenu.map((item, index)=>(
                  <Option value={item} key={index}>{item}</Option>
                ))
              }
              </Select>
            </div>
            <div className="aipt">
              <div className="head"><i>*</i>所在区域</div>
              <Select style={{ width: 305 }} onChange={areaSelectAction} placeholder="请选择所在区域">
              {
                areaMenu.map((item, index)=>(
                  <Option value={item} key={index}>{item}</Option>
                ))
              }
              </Select>
            </div>
          </div>
          <div className="iptgroup">
            <div className="aipt">
              <div className="head"><i>*</i>法定代表人</div>
              <Input className="ipt" ref={contactRef} placeholder="请填写法定代表人" />
            </div>
            <div className="aipt">
              <div className="head">职位</div>
              <Input className="ipt" ref={positionRef} placeholder="请填写职位" />
            </div>
            <div className="aipt">
              <div className="head"><i>*</i>手机号码</div>
              <Input className="ipt" ref={mobilePhoneRef} placeholder="请填写手机号码" />
            </div>
          </div>
          <div className="iptgroup">
            <div className="aipt">
              <div className="head">QQ</div>
              <Input className="ipt" ref={qqRef} placeholder="请填写QQ" />
            </div>
            <div className="aipt">
              <div className="head"><i>*</i>邮箱</div>
              <Input className="ipt" ref={emailRef} placeholder="请填写邮箱" />
            </div>
            <div className="aipt">
              <div className="head">微信</div>
              <Input className="ipt" ref={wxRef} placeholder="请填写微信" />
            </div>
          </div>
        </section>
        <section className="form">
          <h4>公司详情</h4>
          <div className="iptgroup3">
            <div className="upload">
              <div className="head"><i>*</i>公司LOGO</div>
              <Upload
                name="logo"
                listType="picture-card"
                className="logo-uploader"
                showUploadList={false}
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                beforeUpload={beforeUpload}
                onChange={handleChange}
              >
                {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
              </Upload>
            </div>
            <div className="iptgroup2">
              <div className="iptgroup">
                <div className="aipt">
                  <div className="head"><i>*</i>详细地址</div>
                  <Input className="ipt" ref={addressRef} placeholder="请填写详细地址" />
                </div>
                <div className="aipt">
                  <div className="head"><i>*</i>电话</div>
                  <Input className="ipt" ref={phoneRef} placeholder="请填写电话" />
                </div>
              </div>
              <div className="iptgroup">
                <div className="aipt">
                  <div className="head">传真</div>
                  <Input className="ipt" ref={faxRef} placeholder="请填写传真" />
                </div>
                <div className="aipt">
                  <div className="head">网址</div>
                  <Input className="ipt" ref={urlRef} placeholder="请填写网址" />
                </div>
              </div>
              <div className="iptgroup">
                <div className="text-wrap">
                  <div className="head">公司介绍</div>
                  <textarea className="text" ref={textRef}
                    onInput={inputAction}
                    placeholder="请输入介绍信息"></textarea>
                  {
                    textNum < 200 ?
                    (<div className="entered">
                      已输入 {textNum}/200
                    </div>) : 
                    (<div className="entered" style={{color: 'red'}}>
                      已达到200字
                    </div>)
                  }
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="form">
          <h4>客户信息</h4>
          <div className="iptgroup">
            <div className="aipt">
              <div className="head"><i>*</i>客户编码</div>
              <Input className="ipt" ref={codeRef} placeholder="请填写客户编码" />
            </div>
            <div className="aipt">
              <div className="head"><i>*</i>客户级别</div>
              <Select style={{ width: 305 }} onChange={handleLevelChange} placeholder="请选择客户级别">
              {
                levelMenu.map((item, index)=>(
                  <Option value={item} key={index}>{item}</Option>
                ))
              }
              </Select>
            </div>
            <div className="aipt">
              <div className="head"><i>*</i>签约时间</div>
              <DatePicker placeholder="请选择日期" onChange={selectDateAction} />
            </div>
          </div>
          <div className="iptgroup">
            <div className="aipt" style={{width: '100%'}}>
              <div className="head">备注信息</div>
              <Input className="ipt" ref={remarkRef} placeholder="请填写备注信息" />
            </div>
          </div>
        </section>
        <section className="form">
          <div className="btns">
            <Button type="primary" className="btn" onClick={submitAction}>提交</Button>
            <Button className="btn">重置</Button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ClientAdd;