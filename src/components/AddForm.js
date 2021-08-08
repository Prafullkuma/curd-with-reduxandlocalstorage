import React from 'react'
import Form from './Form'
import { useDispatch } from 'react-redux'
import { addUser} from '../actions/userAction'

const AddForm = () => {
    const dispatch=useDispatch()

    const formSubmission=(formData,clearForm,)=>{  

        dispatch(addUser(formData,clearForm))
    }
    return (
        <div>
            <h1> Add form</h1>
            <Form formSubmission={formSubmission}/>
        </div>
    )
}

export default AddForm
