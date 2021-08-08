import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import confireStore from './store/confireStore'
import {saveState} from './localStorage'

const store=confireStore()

console.log("before update",store.getState())

store.subscribe(()=>{
    saveState({
        user:store.getState().user
    })
    console.log("updated value",store.getState())
})

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
document.getElementById('root'))