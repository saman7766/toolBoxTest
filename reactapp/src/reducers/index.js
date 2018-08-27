let defaultState={
    text:"testing"
}

const mainReducer=(state=defaultState,action)=>{
    if(action.type==="NEW_TEXT"){
        return{
            ...state,
            text:action.text
        }
    }
    else{
        return{
            ...state
        }
    }
}

export default mainReducer;