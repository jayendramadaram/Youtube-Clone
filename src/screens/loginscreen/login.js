import React , {useEffect} from 'react'
import { useDispatch , useSelector } from 'react-redux'
import './login.scss'
import logo from './Screenshot_2021-07-18_124258-removebg-preview.png'
import { kogin } from '../../redux/actions/auth.action'
import { useHistory   } from 'react-router-dom'

function Login() {

    const dispatch = useDispatch()

    const accessToken =  useSelector(state => state.auth.accessToken)

    const handlelogin = () => {
        dispatch(kogin())
    }

    const history = useHistory()

    useEffect(() => {
        if (accessToken) {
            history.push('/')
        }
    }, [accessToken , history])


    return (
        <div className="login">
            <div className='cont'>
                <img src= {logo}  />
                <button className='btn btn-primary' onClick={ () => handlelogin()} >click this</button>
                <p>click here to login into your account dattebayo</p>
            </div>
        </div>
    )
}

export default Login
