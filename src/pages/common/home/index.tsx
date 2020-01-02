import React, { useEffect } from 'react'
import './style.scss'
import {useSelector, useDispatch} from "react-redux";
import {requsetHomeData} from '../../../store/models/home'
import HomeView from './children/home-view'
import Schedule from './children/schedule'


const Home: React.FC<{}> = ()=>{

  let homeData = useSelector((state)=>(state as any).getIn(['home', 'homeData']));
  homeData = homeData.data && homeData.data.data;
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(requsetHomeData);
  }, [dispatch]);

  return (
    <div id="home">
      <div className="aside-left">
        <HomeView homeData={homeData}/>
        
      </div>
      <div className="aside-right">
        <Schedule homeData={homeData}/>
      </div>
    </div>
  )
}
export default Home;