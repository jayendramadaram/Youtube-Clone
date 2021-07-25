import { HOME_VEDIO_REQUEST, HOME_VEDIO_SUCCESS } from "./actiontypes"

export const homereducer = (state = {
    videos : [],
    nextPageToken : null ,
    loading : false,
    actcat : "all"
} , action ) => {
    const { type , payload } = action

    switch (type) {
        case HOME_VEDIO_REQUEST :
            return {
                ...state,
                loading : true,
            }
        case HOME_VEDIO_SUCCESS :
            return {
                ...state,
                loading : false,
                videos : 
                state.actcat === payload.category ? [...state.videos , ...payload.videos] : payload.videos ,
                nextPageToken : payload.nextPageToken,
                actcat : payload.category,
                
            }
            
        case HOME_VEDIO_REQUEST :
            return {
                ...state,
                loading : false,
                error : payload
            }
    
        default:
            return state
    }
    
    console.log(state.actcat , payload)
}