import axios from 'axios'

export const request = axios.create({
    baseURL : 'https://youtube.googleapis.com/youtube/v3/',
    params : {
        key : 'AIzaSyBNQDE7rcWg6tr20K9S_Yy3NDdDsdzkXmg',
    }
})