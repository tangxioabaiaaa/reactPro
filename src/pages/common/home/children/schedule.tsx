import React, { memo, useState, useCallback, useMemo } from 'react'
import { Calendar, Icon } from 'antd';

interface propInterface {
  homeData: any
}

const recordList = [
  {id: 'remember', title: '提醒'},
  {id: 'schedules', title: '日程'},
  {id: 'tips', title: '记事'}
]

const Remember: React.FC<any> = memo((props)=>{
  const {data=[]} = props;
  return (
    <nav className="remind">
    {
      data.map((item: any, index: number)=>(
        <li className="remind-item" key={index}>
          <div className="title">
            <Icon type="alert" theme="filled" className="icon"/>
            <h4>{item.title}：</h4>
          </div>
          <p className="desc">
            {item.content}
          </p>
          <div className="time">
            <p>{item.time}</p>
          </div>
        </li>
      ))
    }
      
    </nav>
  )
})

const Schedules: React.FC<any> = memo((props)=>{
  const {data} = props;
  
  return (
    <nav className="schedules">
    {
      data.map((item: any, index: number)=>(
        <li className="schedules-item" key={index}>
          <div className="schedules-title">
            <div className="ball"></div>
            <p className="time">{item.time}</p>
          </div>
          <p className="type">类型：{item.type}</p>
          <p className="desc">
            {item.content}
          </p>
        </li>
      ))
    }
      
      <div className="line"></div>
    </nav>
  )
})


const HomeView: React.FC<propInterface> = memo(({homeData})=>{
  const [select, setSelect] = useState('remember');
  console.log(homeData);
  
  const selectAction = useCallback((val)=>{
    setSelect(val);
  }, []);

  const Panel = useMemo(()=>{
    if (select === 'remember'){
      return Remember;
    }else if(select === 'schedules'){
      return Schedules;
    }else{
      return Remember;
    }
  }, [select]);

  const panelData = useMemo(()=>{
    if(!homeData){
      return;
    }
    if (select === 'remember'){
      return homeData.more.remember;
    }else if(select === 'schedules'){
      return homeData.more.schedules;
    }else{
      return homeData.more.remember;
    }
  }, [select, homeData])

  return (
    <>
      <div className="calendar">
        <div style={{ width: 300, border: '1px solid #d9d9d9', borderRadius: 4 }}>
          <Calendar fullscreen={false} />
        </div>
      </div>
      <div className="record">
        <nav className="record-title">
        {
          recordList.map((item, index)=>(
            <li className="item" key={index} onClick={()=>selectAction(item.id)}>
              <span style={{borderColor: select === item.id?'#c9c9c9':'transparent'}}>{item.title}</span>
            </li>
          ))
        }
        </nav>
        <Panel data={panelData} />
      </div>

    </>
  )
})

export default HomeView;
