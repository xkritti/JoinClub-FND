import React from 'react';
import { Container } from 'reactstrap';
import './App.css';
import Menubar from './component/Menubar';
import Club from './component/Club';
import Title from './component/Title'


const App = () => {
  return (
    <div>
      <Menubar />
      <Container fluid={true} className="Main">
        <Title />
        <Club />
      </Container>
      <Container className="App-footer">
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
