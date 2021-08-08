import React from 'react'
import { useDispatch } from 'react-redux'
import Form from './Form'
import { editForm} from '../actions/userAction'

const EditForm = ({id,name,collage}) => {
    const dispatch=useDispatch()

    const formSubmission=(formData,clearForm)=>{
        dispatch(editForm(formData,clearForm))    
    }
    return (
        <div>
            <Form formSubmission={formSubmission} id={id} name={name} collage={collage}/>
        </div>
    )
}

export default EditForm
