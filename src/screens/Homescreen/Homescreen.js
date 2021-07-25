import React, { useEffect } from 'react'
import { Container, Row , Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { request } from '../../api'
import Catogories from '../../components/catogories/Catogories'
import Vedio from '../../components/vedio/vedio'
import { getpopvedios } from '../../redux/actions/vedio.action'
import './homescren.css'
import Infinitescroll from 'react-infinite-scroll-component'

const Homescreen = () => {

    const list = [...new Array(20)]

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getpopvedios())
    }, [dispatch])

    const fetchdata = () => {
        dispatch(getpopvedios())
    }
    

    const { videos } = useSelector(state => state.homereducer)
    console.log(videos);

    


    // console.log(videos);
    return (
        <Container className="scl">
            
            <Catogories />
            <Infinitescroll

            dataLength = {videos.length}
            next = { fetchdata }
            hasMore = {true}
            loader = {
                <div className="spinner-border text-danger d-block mx-auto" ></div>
            }

            className="row"  >
            
            {videos.map((vedio) => (
                    <Col lg={3} md ={4} key={vedio.id}>
                        <Vedio vedio = {vedio} />
                    </Col>
                    ))}
            
            </Infinitescroll>

        </Container>
    )
}

export default Homescreen
