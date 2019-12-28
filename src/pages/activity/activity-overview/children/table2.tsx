import React, { memo, useEffect, useRef } from 'react'
const echarts = require('echarts/lib/echarts');
require("echarts/lib/component/tooltip");
require("echarts/lib/component/grid");
require("echarts/lib/chart/bar");

const Table1: React.FC<{}> = memo(()=>{
  const table2 = useRef<HTMLDivElement | null>(null);
  // table1
//   app.title = '坐标轴刻度与标签对齐';

    const options = {
        color: ['#3398DB'],
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                data : ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期天'],
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'直接访问',
                type:'bar',
                barWidth: '60%',
                data:[10, 52, 200, 334, 390, 330, 220]
            }
        ]
    };

  useEffect(()=>{
    if(!table2.current){
      return
    }
    const myChart = echarts.init(table2.current);
    myChart.setOption(options);

  }, [table2])

  return (
    <div className="table-content" ref={table2}></div>
  )
})
export default Table1;