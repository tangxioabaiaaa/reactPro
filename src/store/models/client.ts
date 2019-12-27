import {Map} from 'immutable'
import api from '../../utils/api'
import ajax from '../../utils/request'
import {Dispatch} from 'redux'

//type
enum SetClientType {
  ClientListData = 'set_client_data'
}

//同步action
const setClientListData = (type: SetClientType, value: object)=>({
  type,
  value
})

//异步action
export const requsetClientList = (data: object)=>async (dispath: Dispatch)=>{
  let result = await ajax.get(api.CLIENT_LIST, data);
  dispath(setClientListData(SetClientType.ClientListData, result.data))
}

//state
const initialState = Map({
  clientData: []
});

type Action = ReturnType<typeof setClientListData>

export default (state = initialState, action: Action)=>{
  switch (action.type) {
    case SetClientType.ClientListData:
      return state.setIn(['clientData'], action.value)
    default:
      return state;
  }
}