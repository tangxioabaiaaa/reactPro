import {Map} from 'immutable'
import api from '../../utils/api'
import ajax from '../../utils/request'
import {Dispatch} from 'redux'

//type
enum SetHomeDataType {
  HomeData = 'set_home_data'
}

//同步action
const setHomeData = (type: SetHomeDataType, value: object)=>({
  type,
  value
})


//异步action
export const requsetHomeData = async (dispath: Dispatch)=>{
  let result = await ajax.get(api.HOME_VIEW_DATA);
  dispath(setHomeData(SetHomeDataType.HomeData, result));
}

//state
const initialState = Map({
  homeData: {}
});

type Action = ReturnType<typeof setHomeData>

export default (state = initialState, action: Action)=>{
  switch (action.type) {
    case SetHomeDataType.HomeData:
      return state.setIn(['homeData'], action.value)
    default:
      break;
  }
  return state;
}