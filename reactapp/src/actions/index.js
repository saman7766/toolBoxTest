import axios from 'axios';

export function sendText(text){
    return(dispatch)=>{
        return axios.get("http://localhost:8080/get/"+text).then((response) =>{
            console.log(response)
            dispatch(showText(response.data.texto))
        })
    }
}

export function showText(text){
    return{
        type:"NEW_TEXT",
        text:text
    }
}