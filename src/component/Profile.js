import React, { useState, useEffect } from 'react'
import '../App.css';
import Menubar from './Menubar';
import { Col, Row, Card, CardImg, CardBody } from 'reactstrap';
import Login from './Login';
import { useSelector } from 'react-redux';

const Profile = () => {

    useEffect(() => {
        console.log(login);
    })

    const login = useSelector(state => state.login)

    return (
        <div>
            <Menubar />
            <div style={{ backgroundColor: "somke", display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: "80vh" }}>
                <Card>
                    <CardImg>

                    </CardImg>
                    <CardBody>
    <h1>{login.id}</h1>
                    </CardBody>
                </Card>
            </div>
            <footer className="App-footer">
                <p className='rainbow-text' style={{ fontSize: "x-large" }}>PSU-JoinClub miniproject for 240-311</p>
                <p>Copyright &copy; Prince of Songkla University , Phuket Campus</p>
            </footer>
        </div>
    )

}
export default Profile;