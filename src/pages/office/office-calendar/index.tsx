import React, {useState} from 'react'

import zhCN from 'antd/es/locale/zh_CN';
import { Calendar, Alert, ConfigProvider } from 'antd';

import moment from 'moment';

const OfficeCalendar: React.FC<{}> = ()=>{

  
  const [valueDate, setvalueDate] = useState(moment('2017-01-25'));
  const [selectedValue, setselectedValue] = useState(moment('2017-01-25'));

  function onPanelChange(value: any, mode: any) {
    console.log(value, mode);
    setvalueDate( value );
  }

  const onSelect = (value:any) => {
    setvalueDate(value);
    setselectedValue(value);
  };





  return (
    <ConfigProvider locale={zhCN}>
      <div>
        <Alert
          message={`You selected date: ${selectedValue && selectedValue.format('YYYY-MM-DD')}`}
        />
        <Calendar value={valueDate} onSelect={onSelect} onPanelChange={onPanelChange} />
      </div>
    </ConfigProvider>
  )
}

export default OfficeCalendar;