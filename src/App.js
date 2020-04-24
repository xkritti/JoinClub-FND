import React from 'react';
import { Container } from 'reactstrap';
import './App.css';
// import Menubar from './component/Menubar';
import Title from './component/Title'
import Login from './component/Login'
import Inputform from './component/InputForm'
import Profile from './component/Profile'
import { Provider } from 'react-redux'
import store from './component/redux/ReduxClub'
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  return (
    <Provider store={store}>
      <div >
        <Router>
          <Switch>
            <Route exact path="/title" component={Title} />
            <Route exact path="/" component={Login} />
            <Route exact path="/input" component={Inputform} />
            <Route exact path="/profile" component={Profile} />
          </Switch>
        </Router>
      </div>
    </Provider>

  )
}


export default App;
