
export const deleteItem="DELETE"
export const deleteAllItem="DELETE_ALL"
export const addUserItem="ADD_USER"
export const editUserItem="EDIT_USER"

export const incrementUser=()=>{
    return{
        type:'INCREMENT'
    }
}

export const deleteUser=(id)=>{
    
    return{
        type:deleteItem,
        payload:id
    }
}

export const deleteAll=()=>{

    return{
        type:deleteAllItem
    }

}
export const addUser=(formData,clearForm)=>{
    clearForm()
    return{
        type:addUserItem,
        payload:formData
    }
}
export const editForm=(formData,clearForm)=>{
    clearForm()
    return{
        type:editUserItem,
        payload:formData
    }
}