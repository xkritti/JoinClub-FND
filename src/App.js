import React from 'react';
import { Button, Container } from 'reactstrap';
import './App.css';
import Menubar from './component/Menubar';


const App = () => {
  return (

    <div>
      <Menubar />
      <Container>
        <h1>Krittamet</h1>
      </Container>
    </div>

  )
}

export default App;
