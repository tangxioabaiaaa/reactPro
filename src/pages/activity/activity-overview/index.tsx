import React, { useRef, useEffect } from 'react'
import './style.scss'
import Table1 from './children/table1'
import Table2 from './children/table2'

const ActivityOverview: React.FC<{}> = ()=>{

  return (
    <div id="active-view">
      <div className="header">
        <nav className="header-list">
          <li className="header-item">
            <div className="count">
              <div className="num">25</div>
              <p>营销活动数量</p>
            </div>
            <img src="/images/active.svg" alt=""/>
          </li>
          <li className="header-item">
            <div className="count">
              <div className="num">34</div>
              <p>进行中的营销活动</p>
            </div>
            <img src="/images/active.svg" alt=""/>
          </li>
          <li className="header-item">
            <div className="count">
              <div className="num">78</div>
              <p>参与活动次数</p>
            </div>
            <img src="/images/active.svg" alt=""/>
          </li>
          <li className="header-item">
            <div className="count">
              <div className="num">65</div>
              <p>中奖数</p>
            </div>
            <img src="/images/active.svg" alt=""/>
          </li>
        </nav>
      </div>
      <div className="table-wrap">
        <div className="table1">
          <div className="table-header">
            参与活动次数汇总
          </div>
          <Table1 />
        </div>
        <div className="table2">
          <div className="table-header">
            活动分析
          </div>
          <Table2 />
        </div>
      </div>
    </div>
  )
}

export default ActivityOverview;



