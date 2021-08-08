import React from 'react'
import UserItem from './UserItem'

import {useDispatch} from 'react-redux'

import { deleteAll } from '../actions/userAction'
const UserList = ({ user }) => {
    
    const dispatch=useDispatch()

    const deleteAllHandle=()=>{
        dispatch(deleteAll())
    }

    return (
        <div>
           <h1>User List</h1>
            <button onClick={deleteAllHandle}>Delete All</button>
            {user.map((ele)=>{
                return <UserItem key={ele.id} {...ele}/>
            })}
            
        </div>
    )
}

export default UserList
