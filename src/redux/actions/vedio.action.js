import { HOME_VEDIO_FAIL, HOME_VEDIO_REQUEST, HOME_VEDIO_SUCCESS} from "../reducer/actiontypes"
import { request } from "../../api"

export const getpopvedios = () => async (dispatch , getState )  => {
    console.log(getState().homereducer.nextPageToken);
    try {

        dispatch ({
            type : HOME_VEDIO_REQUEST ,

        })

        const { data } = await request('/videos' , {
            params : {
                part :  "snippet,contentDetails,statistics" ,
                chart : "mostPopular" ,
                regionCode : "IN" ,
                maxResults : 20,
                pageToken : getState().homereducer.nextPageToken
            }
        })

        // console.log( " 1111111111hhhhhhhhhhhhh" ,data);

        dispatch ({
            type : HOME_VEDIO_SUCCESS ,
            payload : {
                videos : data.items,
                nextPageToken : data.nextPageToken,
                category : 'all'
            }
        })

        
    } catch (error) {
        dispatch({
            type : HOME_VEDIO_FAIL,
            payload : error.message
        })
    }
}


export const getvediofrbut = (keyword) => async ( dispatch , getState ) => {
    try {
        

        dispatch ({
            type : HOME_VEDIO_REQUEST ,

        })

        const { data } = await request('/search' , {
            params : {
                part :  "snippet" ,
                regionCode : "US" ,
                maxResults : 20,
                q : keyword   ,
                pageToken : getState().homereducer.nextPageToken,
                type : 'vedio'
            }
        })

        // console.log( " 1111111111hhhhhhhhhhhhh" ,data);

        dispatch ({
            type : HOME_VEDIO_SUCCESS ,
            payload : {
                videos : data.items,
                nextPageToken : data.nextPageToken,
                category : keyword
            }
        })

        
    } catch (error) {
        dispatch({
            type : HOME_VEDIO_FAIL,
            payload : error.message
        })
    }
}

