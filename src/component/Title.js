import React from 'react'
import '../App.css';
// import { Card, CardBody, CardFooter, Container } from 'reactstrap'
import Club from './Club';
import { Container, Row } from 'reactstrap';

const Title = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' ,minHeight:"80vh" }}>
            <h1>Join Club</h1>
            <Container className='Club'>
                <Club  name="Music Club" id='1' />
                <Club  name="Esport Club" id='2' />
                <Club  name="Football Club" id='3' />
                <Club  name="Basketball Club " id='4' />
                <Club  name="Esport" id='5' />
                <Club  name="Music Club" id='1' />
                <Club  name="Esport Club" id='2' />
                <Club  name="Football Club" id='3' />
                <Club  name="Basketball Club " id='4' />
                <Club  name="Esport" id='5' />
                <Club  name="Music Club" id='1' />
                <Club  name="Esport Club" id='2' />
                <Club  name="Football Club" id='3' />
                <Club  name="Basketball Club " id='4' />
                <Club  name="Esport" id='5' />
                <Club  name="Music Club" id='1' />
                <Club  name="Esport Club" id='2' />
                <Club  name="Football Club" id='3' />
                <Club  name="Basketball Club " id='4' />
                <Club  name="Esport" id='5' />
            </Container>
        </div>
    )

}
export default Title;