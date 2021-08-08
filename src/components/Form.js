import React, { useState } from 'react'

const Form = (props) => {
    const {formSubmission,id:Eid,name:Ename,collage:Ecollage}=props
    const [id,setId]=useState(Eid?Eid :Number(new Date()))
    const [name,setName]=useState(Ename ?Ename :'')
    const [collage,setCollage]=useState(Ecollage?Ecollage :'')
    const handleChange=(e)=>{
        const atte=e.target.name
        if(atte==="name"){
            setName(e.target.value)
        }
        else if(atte==="collage"){
            setCollage(e.target.value)
        }
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            id:id,
            name:name,
            collage:collage
        }
        const clearForm=()=>{
            setId(Number(new Date()))
            setName('')
            setCollage('')
        }
        formSubmission(formData,clearForm)        
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Enter name" value={name} onChange={handleChange} /><br/><br/>
                <input type="text" name="collage" placeholder="Enter collage" value={collage} onChange={handleChange}/><br/><br/>
                 {Eid ? <input type="submit" value="Edit form"/> : <input type="submit" value="add form"/>}
            </form>
            
        </div>
    )
}

export default Form
