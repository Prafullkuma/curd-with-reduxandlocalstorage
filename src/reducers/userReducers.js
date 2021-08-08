import { deleteItem ,deleteAllItem,addUserItem,editUserItem}  from '../actions/userAction'

const userInitialState=[
    {id:'1',name:'Google',collage:'KLE'},
    {id:'2',name:'Prafull',collage:'Jain'}
]

const userReducers = (state=userInitialState,action) => {

    switch (action.type) {

        case deleteItem : { 
            return state.filter((ele)=>{
                 return ele.id !==action.payload
            })  
        }  

        case deleteAllItem : {
            return []
        }
        case addUserItem:{
            return [action.payload,...state]
        }

        case editUserItem:{
            
            return state.map((ele)=>{
                if(ele.id===action.payload.id){
                    return {...ele,...action.payload}
                }else{
                    return {...ele}
                }
            })
        }

        default:{
           return state     
        }
    }
}

export default userReducers
