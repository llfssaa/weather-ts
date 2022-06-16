type OnTextChangeActionType = {
    type: typeof ON_TEXT_CHANGE,
    text: string,
}
type initStateType = {
    list: Array<string>,
    value: String
}


const ON_TEXT_CHANGE = "ON_TEXT_CHANGE";


let initState:initStateType = {
    list: [],
    value: 'hey'
}
let homeReducer = (state:initStateType = initState, action:any):initStateType =>{
    switch (action.type){
        case ON_TEXT_CHANGE:{
            return{
                ...state,
                value: action.text,
            }
        }
        default:
            return state;
    }
}

export const onTextChange = (text:string):OnTextChangeActionType => ({type: ON_TEXT_CHANGE, text});


export default homeReducer