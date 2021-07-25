import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {
    getpopvedios ,
    getvediofrbut
} from "../../redux/actions/vedio.action.js"

import "./_catogories.scss"

import { request } from '../../api.js'

const Catogories = () => {
    const [activeElement, setActiveElement] = useState('All')
 
    const dispatch = useDispatch()
    const handleClick = value => {
       setActiveElement(value)
       if (value === 'All') {
          dispatch(getpopvedios())
       } else {
          dispatch(getvediofrbut(value))
       }
    }

    const [ite , setIte] = useState(null)

    useEffect(() => {
       const getcat = async () => {
          const { data : {items} } = await request('/videoCategories' ,{
            params : {
               part :  "snippet" ,
               regionCode : "US"
           }
          })
          setIte(items)
       }
       getcat()
    },[])

   if (ite !== null) { 
      var words = ite.map((ele) => ele.snippet.title)
   }
   else{
      var words = []
   }
   
    return (
       <div className='catbar'>
          <span onClick={() => handleClick("All")} className = {activeElement === 'All' ? 'active' : ''} >ALL</span>
          {words.map((value, i) => (
             <span
                onClick={() => handleClick(value)}
                key={i}
                className={activeElement === value ? 'active' : ''}>
                {value}
             </span>
          ))}
       </div>
    )
 }
 


export default Catogories

