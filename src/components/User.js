import React from 'react'
import UserList from './UserList'
import { useSelector } from 'react-redux'

const User=()=>{
    const user = useSelector(state => state.user)
    
    return(
        <div>
            <h1>User</h1>
            <UserList user={user}/>
        </div>
    )
}
export default User