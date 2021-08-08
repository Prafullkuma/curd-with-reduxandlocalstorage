import React,{useState} from 'react'
import {useDispatch} from 'react-redux'

import { deleteUser } from '../actions/userAction'
import EditForm from './EditForm'

const UserItem = ({id,name,collage}) => {
    const dispatch = useDispatch()
    const [toggle,setToggle]=useState(false)
    const deleteHandle=(id)=>{
        dispatch(deleteUser(id))
    }

    const toggleHandle=()=>{
        setToggle(!toggle)
    }

    return (
        <div style={{border:'1px solid black',margin:'20px',padding:'10px'}}>
         
           <p>{name}</p>
           <p>{collage}</p>
           <button onClick={()=>deleteHandle(id)}>Delete</button>
           {
              toggle?
              <div>
                   <EditForm id={id} name={name} collage={collage}/>
                   <button onClick={toggleHandle}>Cancel</button>
             </div>
             :
              <button onClick={toggleHandle}>Edit</button>
           }
          </div>
    )
}

export default UserItem
