import React, { useEffect, useState  } from 'react'
import { Container } from 'react-bootstrap';

import './App.css';
import Header from "./components/header/header.js";
import Sidebar from './components/siderbar/sidebar';

import Homescreen from './screens/Homescreen/Homescreen.js';
import "./_app.scss";
import Login from './screens/loginscreen/login';
import { useSelector  } from 'react-redux'
import { Redirect, Route , Switch, useHistory} from "react-router-dom" 

const Layout = ({ children }) => {
  const [sidebar, toggleSidebar] = useState(false)

  const handleToggleSidebar = () => toggleSidebar(value => !value)

  return (
     <>
        <Header c={handleToggleSidebar} />
        <Container  fluid className="sec_phase">
           <Sidebar
              sidebar={sidebar}
              c={handleToggleSidebar}
           />
           <Container fluid className="p-0">
              { children }
            </Container>
            </Container>
     </>
  )
}

const App = () => {


  const {accessToken , loading}  = useSelector(state => state.auth)


  const History = useHistory()

  useEffect(() => {
    if (!loading && !accessToken) {
      History.push('/auth')
      
    }
  }, [accessToken , loading , History])

  return (
      <Switch>
          <Route path='/' exact>
            <Layout>
                <Homescreen />
            </Layout>
          </Route>

          <Route path='/auth'>
            <Login />
          </Route>            

          <Route>
            <Redirect to='/' />
          </Route>
      </Switch>
  )
}

export default App
































