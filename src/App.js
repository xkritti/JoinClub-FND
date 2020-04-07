import React from 'react';
import { Container } from 'reactstrap';
import './App.css';
import Menubar from './component/Menubar';
import Title from './component/Title'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './component/Login';



const App = () => {
  return (
    <div >

      <Menubar />
      <Router>
        <Switch>
          <Route exact path="/" component={Title} />
          <Route path="/Login" component={Login} />
        </Switch>
      </Router>

      <Container className="App-footer" fluid={true}>
        <p>
          PSU-JoinClub miniproject for 240-311
        </p>
        <p>
          CopyRigth Prince of songkla university , Phuket campus
        </p>
      </Container>
    </div>
  )
}


export default App;
