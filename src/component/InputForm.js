import React, { useState, useEffect } from 'react'
import '../App.css';
import { Row, Col, Container, Card, CardBody, CardFooter, CardImg, Button, Form, FormGroup, Label, Input } from 'reactstrap'
import Menubar from './Menubar';
import { bindActionCreators } from 'redux';
import ReduxClub, { listAction } from './redux/ReduxClub'
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';
import Login from './Login';


function Inputform() {
    
    const [newData, setNewData] = useState({
        id: 0,
        club_name: '',
        club_image: '',
        club_des: '',
        member_name: [],
        people: 0
    })
    const clubReduc = useSelector(state => state.clubReduc)
    const Action = bindActionCreators(listAction, useDispatch())
    const [newMember, setnewMember] = useState({
        name: '',
        stdID: ''
    })

    const sendNewdata = () => {
        let id = (clubReduc.length === 0) ? 1 : clubReduc[clubReduc.length - 1].id + 1
        if (newData.club_name && newData.club_image && newData.club_des) {
            newData.id = id
            Action.addClub(newData)
            console.log(newData)
            setTimeout(() => {
                window.location.reload()
            }, 1000)
        }
        else {
            alert("Pls in put Detail of Club")
        }
    }

    let Admin = localStorage.getItem('Admin');
    if (Admin == false) {
        return (
            <Form style={{
                display: "flex",
                flexDirection: "column",
                justifyItems: "center",
                alignContent: "center",
                backgroundColor: "white",
                padding: "50px",
                marginBottom: "20px",
                borderRadius: "10px"
            }}>
                <h3> Add & Edit Club </h3>
                <FormGroup>
                    <Label>ClubName</Label>
                    <Input onChange={(e) => setNewData({ ...newData, club_name: e.target.value })} />
                </FormGroup>
                <FormGroup>
                    <Label>ClubPicture</Label>
                    <Input onChange={(e) => setNewData({ ...newData, club_image: e.target.value })} />
                </FormGroup>
                <FormGroup>
                    <Label>ClubDescription</Label>
                    <Input onChange={(e) => setNewData({ ...newData, club_des: e.target.value })} />
                </FormGroup>
                <Button color="success"
                    onClick={() => {
                        sendNewdata()
                        setTimeout(() => {
                            window.location.reload()
                        }, 1500)
                    }}>Submit</Button>
            </Form>
        )
    } else {
        return (
            <CardImg style={{width:"30%"}} src="https://image.freepik.com/free-vector/pensive-businessman-making-decision_74855-5283.jpg" />
        )

    }
}
export default Inputform 