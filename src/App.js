import React from 'react';
import { Container } from 'reactstrap';
import './App.css';
import Menubar from './component/Menubar';
import Title from './component/Title'


const App = () => {
  return (
    <div >
      <Menubar />
        <Title />
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
