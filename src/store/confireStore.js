import { combineReducers, createStore } from "redux"
import userReducers from '../reducers/userReducers'
import {loadState} from '../localStorage'

const sState=loadState()

const confireStore = () => {
  const store=createStore(
    combineReducers({
       user:userReducers
    }),
    sState
  )
  return store       
}

export default confireStore
