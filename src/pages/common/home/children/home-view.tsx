import React, { memo, useState, useCallback, useMemo, useRef, useEffect } from 'react'
import { Icon } from 'antd';
const echarts = require('echarts/lib/echarts');
require("echarts/lib/chart/line");

const dealList = [
  {id: 'processed', title: '待处理'},
  {id: 'know', title: '需知晓'},
  {id: 'initiate', title: '我发起'},
  {id: 'dealed', title: '已处理'},
]
interface propInterface {
  homeData: any
}

const WeekChart: React.FC<{}> = memo(()=>{

  const chartDOM = useRef<HTMLDivElement | null>(null);
  useEffect(()=>{
    if(!chartDOM.current){
      return
    }
    const myChart = echarts.init(chartDOM.current);
    const options = {
      xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      },
      yAxis: {
          type: 'value'
      },
      series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          areaStyle: {}
      }]
    };
    myChart.setOption(options);

  }, [chartDOM])

  return (
    <div className="showdata-content" ref={chartDOM}></div>
  )
})

const HomeView: React.FC<propInterface> = memo(({homeData})=>{
  const [dealStatus, setDealStatus] = useState('processed');

  const dealSelectAction = useCallback((id:string)=>{
    setDealStatus(id);
  }, [])

  const todoList = useMemo(()=>{
    if(homeData){
      return homeData.todo[dealStatus]
    }else{
      return []
    }
  }, [homeData, dealStatus])

  return (
    <>
    <div className="view">
        <div className="view-title">
          <Icon type="code" />
          <span>视图</span>
        </div>
        <nav className="view-list">
          <li className="view-item">
            <div className="title">商机</div>
            <img src="/images/view1.png" alt=""/>
            <div className="count">{homeData && homeData.view.business}/个</div>
          </li>
          <li className="view-item">
            <div className="title">回款</div>
            <img src="/images/view2.png" alt=""/>
            <div className="count">¥{homeData && homeData.view.receivable}</div>
          </li>
          <li className="view-item">
            <div className="title">线索</div>
            <img src="/images/view3.png" alt=""/>
            <div className="count">{homeData && homeData.view.clues}/个</div>
          </li>
          <li className="view-item">
            <div className="title">客户</div>
            <img src="/images/view4.png" alt=""/>
            <div className="count">{homeData && homeData.view.customer}/个</div>
          </li>
          <li className="view-item">
            <div className="title">合同</div>
            <img src="/images/view5.png" alt=""/>
            <div className="count">{homeData && homeData.view.contract}/个</div>
          </li>
        </nav>
      </div>
      <div className="handle">
        <div className="remind">
          <div className="remind-title">
            <Icon type="code" />
            <span>我的提醒</span>
          </div>
          <div className="remind-con">
          {
            homeData && homeData.mytips.map((item: any, index: number)=>(
              <div className="cart" key={index}>
                <img src={`/images/cart${index+1}.svg`} alt=""/>
                <h2>{item.count}</h2>
                <p>{item.day}天未新增</p>
              </div>
            ))
          }
          </div>
        </div>
        <div className="upcoming">
          <div className="upcoming-title">
            <div>
              <Icon type="code" />
              <span>待办中心</span>
            </div>
            <ul className="deal-list">
              {
                dealList.map((item, index)=>(
                  <li key={index}
                  style={{
                    borderBottomColor: dealStatus === item.id ?'#329cf8':'transparent',
                    color: dealStatus === item.id ?'#666666':'#999999'
                  }}
                  onClick={()=>dealSelectAction(item.id)}
                  >{item.title}</li>
                ))
              } 
            </ul>
          </div>
          <nav className="upcoming-con">
          {
            todoList.map((item: string, index: number)=>(
              <li key={index}>
                <Icon type="snippets" className="icon"/>
                <p>{item}</p>
              </li>
            ))
          }
            <div className="viewall">
              <span>共20条</span><span>查看全部</span>
            </div>
          </nav>
        </div>
      </div>
      <div className="showdata">
        <div className="showdata-title">
          <Icon type="code" />
          <span>仪表盘</span>
        </div>
        
        <WeekChart/>
      </div>
    </>
  )
})

export default HomeView;