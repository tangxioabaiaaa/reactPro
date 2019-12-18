import {Action, Dispatch} from 'redux'
import {Map} from 'immutable'


import ajax from '../../utils/request'
import API from '../../utils/api'


enum loginType {
  status = "login_status"
}

const loginAction = (type:loginType, value:boolean)=>({
  type,
  value
})


export const requestUserLogin = (name:string, password:string)=>(dispatch:Dispatch)=>{
  
  ajax.get(API.LOGIN_API,{
    params:{
      name,
      password
    }
  })
  .then(({data})=>{
    if(data.code === 0){
      dispatch(loginAction(loginType.status, true));
      return true
    }else{
      dispatch(loginAction(loginType.status, false))
      return false
    }
  })
  .catch((error)=>{
    throw(error)
  })
}

const initialState = Map({
  isLogin: false,
  userInfo: Map({
    role: 'admin'
  })
});


export default (state = initialState, action: any)=>{
  switch (action.type) {
    case loginType.status:
      
      return state.set("isLogin",action.value)

    default:
      break;
  }
  return state;
}