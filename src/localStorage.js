export const loadState=()=>{
    try{
        const sState=localStorage.getItem('user')

        if(sState===null){
            return undefined
        }
        return JSON.parse(sState)
    }catch(err){
        return undefined
    }
}
export const saveState=(user)=>{
    try{
        const sState=JSON.stringify(user)
        localStorage.setItem('user',sState)
    }
    catch(err){

    }
}