import React, { useState, useEffect } from 'react'
import '../App.css';
import Menubar from './Menubar';
import { Col, Row, Card, CardImg, CardBody, CardFooter, Button } from 'reactstrap';

import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import ReduxClub, { listAction } from './redux/ReduxClub'

const Profile = () => {
    const [userdata, setuserdata] = useState({
        name: localStorage.getItem('userpassport'),
        stdID: localStorage.getItem('IDuserpassport')
    })

    const [check, setcheck] = useState(false);
    const dispatch = useDispatch()
    const Action = bindActionCreators(listAction, dispatch)


    useEffect(() => {
        if (check == true) {
            alert('มีชมรม')
        }else{
            alert('ไม่มีชมรม')
        }


    }, [check])

    const renderStudent = () => {
        return (
            <Card style={{ width: '50%', padding: '50px', borderStyle: 'outset' }}>
                <h3>Student : {userdata.stdID}</h3>
                <a>ชื่อ : {userdata.name}</a>
                {whatjoin()}
                <Button onClick={() => {
                    if (check == false) {
                        setcheck(true)
                    } else {
                        setcheck(false)
                    }
                }}>
                    ทดสอบ Check
                </Button>
            </Card>
        )
    }

    const whatjoin = () => {
        if (check == false) {
            return (
                <h1> ทดสอบ ไม่มีชมรมแล้ว </h1>
            )
        } else {
            return (
                <h1> ทดสอบ มีชมรม</h1>
            )
        }

    }



    return (
        <div>
            <Menubar />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: "somke", minHeight: "80vh" }}>
                <a className="rainbow-text" style={{ fontSize: "50px" }}>Student Status</a>
                {renderStudent()}





            </div>
            <footer className="App-footer">
                <p className='rainbow-text' style={{ fontSize: "x-large" }}>PSU-JoinClub miniproject for 240-311</p>
                <p>Copyright &copy; Prince of Songkla University , Phuket Campus</p>
            </footer>
        </div>
    )

}
export default Profile;