import React, { useEffect, useState } from 'react'
import "./_vedio.scss"
import { AiFillEye } from 'react-icons/ai';
import { request } from '../../api';
import moment from 'moment'
import logo from '../../images/Screenshot 2021-07-25 010917.jpg'



// videos[0].snippet.thumbnails.medium.url , videos[0].snippet.thumbnails.medium.height , videos[0].snippet.thumbnails.medium.width

const Vedio = ( {vedio}) => {
    // console.log(vedio);
    

    if ( typeof(vedio.id)  === "string" ){
        var vide_id = vedio.id
    }
    else if ( typeof(vedio.id.videoId)  === "string" ) {
        var vide_id = vedio.id.videoId
    }


    // console.log("id" , vide_id);
    const [ duration , setDuration ] = useState(null)
    const [ icon , setIcon ] = useState(null)
    const [ vie , setVie ] = useState(null)


    useEffect(()  => {
        const get_det = async () => {
            const {data : {items}} = await request('/videos',{
                params : {
                    part :  "contentDetails,statistics" ,
                    id : vide_id,
                }
            })
            // console.log(items);
            // console.log('looooolllllllllllllllllllllllll' , items);

            setDuration( items[0].contentDetails.duration )

            var vie = items[0].statistics.viewCount

            setIcon(icon)
            setVie(vie)
        } 
        get_det()
    },[vide_id])



    var cname = Math.round(parseFloat(vie/10**6 , 1) ,1 )
    if (cname === 0){
        var view = "k"
        var cname = Math.round(parseFloat(vie/10**3 , 1) ,1 )
    }
    else {
        var view = "million"
    }

    const sec = moment.duration(duration).asSeconds()
    var dura = moment.utc(sec * 1000).format("mm:ss")

    if (dura === "00:00") {
        var dura = <img src= {logo} height="26" width="46"/>
    }



    useEffect(()  => {
        const get_ico = async () => {
            const {data : {items   }} = await request('/channels',{
                params : {
                    part :  "snippet" ,
                    id : vedio.snippet.channelId,
                }
            })
            var icon = items[0].snippet.thumbnails.default.url

            setIcon(icon)
            
        } 
        get_ico()
    },[vedio.snippet.channelId])


    



    return (
        <div className="vedio">
            <div className="vedio__top">
                <img src ={ vedio.snippet.thumbnails.medium.url } height={ vedio.snippet.thumbnails.medium.height } width = { vedio.snippet.thumbnails.medium.width }/>
                <span> {dura} </span>
            </div>
        
        <div className="vedio__str">
            <div>
            <div className="vedio__channel">
                <img src= { icon }  />
            </div>
            </div>
            <div>
            <div className="vedio__title">
            { vedio.snippet.title}
            </div>
            <div className="vedio__cname">
                
                <span>{ vedio.snippet.channelTitle }</span>
            </div>
            <div className="vedio__details">

                <span><AiFillEye/></span> <span> { cname } {view} </span>
            </div>
            </div>
            
        </div>
            
        </div>
    )
}

export default Vedio
