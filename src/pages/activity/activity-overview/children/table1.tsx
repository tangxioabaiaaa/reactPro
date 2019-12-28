import React, { memo, useEffect, useRef } from 'react'
const echarts = require('echarts/lib/echarts');
require("echarts/lib/component/title");
require("echarts/lib/component/tooltip");
require("echarts/lib/component/legendScroll");
require("echarts/lib/component/legend");
require("echarts/lib/chart/pie");

const Table1: React.FC<{}> = memo(()=>{
  const table1 = useRef<HTMLDivElement | null>(null);
  // table1
  const options = {
        title : {
            text: '某站点用户访问来源',
            subtext: '纯属虚构',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
        },
        series : [
            {
                name: '访问来源',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:335, name:'直接访问'},
                    {value:310, name:'邮件营销'},
                    {value:234, name:'联盟广告'},
                    {value:135, name:'视频广告'},
                    {value:1548, name:'搜索引擎'}
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
  useEffect(()=>{
    if(!table1.current){
      return
    }
    const myChart = echarts.init(table1.current);
    myChart.setOption(options);

  }, [table1])

  return (
    <div className="table-content" ref={table1}></div>
  )
})
export default Table1;