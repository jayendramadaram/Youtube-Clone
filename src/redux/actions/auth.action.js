import firebase from 'firebase/app'

import auth from '../../firebase'
import { LOAD_PROFILE, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOG_OUT } from '../reducer/actiontypes'

export const kogin = () => async dispatch => {
    try {

        dispatch({
            type : LOGIN_REQUEST,
        })

        
        const provider = new firebase.auth.GoogleAuthProvider()
        provider.addScope('https://www.googleapis.com/auth/youtube.force-ssl')

        const res = await auth.signInWithPopup(provider)
        // console.log(res);

        const accessToken = res.credential.accessToken
        
        const profile = {
            name : res.additionalUserInfo.profile.name,
            photoURL : res.additionalUserInfo.profile.picture
        }

        sessionStorage.setItem('ytc-access-Token' , accessToken )
        sessionStorage.setItem('ytc-user' ,JSON.stringify(accessToken) )

        dispatch({
            type : LOGIN_SUCCESS,
            payload : accessToken
        })

        dispatch({
            type : LOAD_PROFILE,
            payload : profile
        })




    } catch (error) {
        console.log(error.message);
        dispatch({
            type : LOGIN_FAIL ,
            payload : error.message
        })
    }
}

export const logout = () => async dispatch => {
    await auth.signOut()
    dispatch ({
        type : LOG_OUT,

    })
    sessionStorage.removeItem('ytc-access-Token')
    sessionStorage.removeItem('ytc-user')
}  