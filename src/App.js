import React from 'react';
import { Container } from 'reactstrap';
import './App.css';
// import Menubar from './component/Menubar';
import Title from './component/Title'
import Logins from './component/Login';
import Inputform from './component/InputForm';
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
            <Route exact path="/" component={Logins} />
            <Route exact path="/Input" component={Inputform} />
          </Switch>
        </Router>
      </div>
    </Provider>

  )
}


export default App;
