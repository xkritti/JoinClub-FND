import React, { useState, useEffect } from 'react'
import '../App.css';
import { Row, Col, Container, Card, CardBody, CardFooter, CardImg, Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap'
import Menubar from './Menubar';
import { bindActionCreators } from 'redux';
import ReduxClub, { listAction } from './redux/ReduxClub'
import { useDispatch, useSelector } from 'react-redux';
const Title = () => {
    const [username, setUsername] = useState('')
    const [newData, setNewData] = useState({
        id: 0,
        club_name: '',
        club_image: '',
        club_des: '',
        member_name: [{
            name: "",
            stdID: ""
        }],
        people: 0
    })
    const clubReduc = useSelector(state => state.clubReduc)
    const Action = bindActionCreators(listAction, useDispatch())
    const [newMember, setnewMember] = useState({
        name: '',
        stdID: ''
    })

    const resiveData = () => {
        Action.getClub()
    }

    useEffect(() => {

        let user = localStorage.getItem('userpassport');

        setnewMember({
            name: localStorage.getItem('Nameuser'),
            stdID: localStorage.getItem('IDuserpassport')
        })




        adminset();
        setUsername(user);
        resiveData();

    }, [])

    const adminset = () => {
        let IDuser = localStorage.getItem('IDuserpassport');
        let admin
        if (IDuser == '5935512001') {
            admin = true
            localStorage.setItem('Admin', admin)
        } else {
            admin = false;
            localStorage.setItem('Admin', admin)
        }
    }


    const sendNewdata = () => {
        let id = (clubReduc.length === 0) ? 1 : clubReduc[clubReduc.length - 1].id + 1
        if (newData.club_name && newData.club_image && newData.club_des) {
            newData.id = id
            Action.addClub(newData)
            console.log(newData)
            alert("ID Club is " + clubReduc.length)
            window.location.reload();
        }
        else {
            alert("Pls in put Detail of Club")
        }
    }

    const updateDataClub = (id) => {
        if (newData.club_name && newData.club_image && newData.club_des) {
            newData.id = id
            Action.updateClub(newData)
            console.log(newData)
            alert("newData.id  " + newData.id)
            window.location.reload();
        }
        else {
            alert("Pls in put Detail of Club")
        }

    }

    const Whoisbutton = (data) => {
        let Admin = localStorage.getItem('Admin');
        if (Admin == 'true') {
            return (
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Button color="warning" style={{ margin: '1px', height: '30px' }}
                        onClick={() => {
                            alert("Update :" + data.id + " name : " + data.club_name)
                            updateDataClub(data.id)
                            setTimeout(() => {
                                window.location.reload()
                            }, 1000)
                        }}>Update</Button>
                    <Button color="danger" style={{ margin: '1px', height: '30px' }}
                        onClick={() => {
                            alert("Delete :" + data.id + " : " + data.club_name)
                            Action.deleteClub(data.id)
                            setTimeout(() => {
                                window.location.reload()
                            }, 1000)
                        }}>Delete</Button>
                </div >
            )
        }


    }

    const Whoisform = () => {
        let Admin = localStorage.getItem('Admin');
        if (Admin == 'true') {
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
                        }}>Submit</Button>
                </Form>
            )
        }
    }


    const JoinClub = (data) => {
        return (
            <Button color="primary" style={{ margin: '2px' }}
                onClick={() => {
                    const clubData = clubReduc.find(item => item.id === data.id)

                    console.log(clubData);
                    if (clubData.member_name[0] == undefined) {
                        clubData.member_name.push({
                            name: newMember.name,
                            stdID: newMember.stdID
                        })
                        clubData.people = clubData.member_name.length
                        let totalpeople = clubData.member_name.length

                        setNewData({
                            ...clubData
                        })
                        //Action.updateClub(clubData)
                        console.log(clubData.member_name.stdID);
                        console.log(newData)
                        console.log(clubData)
                    } else  {
                        alert('เข้าชมรมแล้วจ้าาา')
                    }

                    // if (memberStatus == false) {
                    //     clubData.member_name.push({
                    //         name: newMember.name,
                    //         stdID: newMember.stdID
                    //     })
                    //     clubData.people = clubData.member_name.length
                    //     let totalpeople = clubData.member_name.length

                    //     setNewData({
                    //         ...clubData
                    //     })
                    //     Action.updateClub(clubData)
                    //     console.log(newData)
                    //     console.log(clubData)
                    // }
                    // else {
                    //     alert("you is club member alrady!!")
                    // }
                }}> Join</Button >
        )
    }


    return (
        <div>
            <Menubar />
            <div style={{ backgroundColor: "black", display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: "80vh" }}>

                <a className="rainbow-text" style={{ fontSize: "50px" }}>Join Club</a>
                <be />
                <a style={{ fontSize: "20px", color: 'white' }}> wellcome {username}</a>
                <Container className='Club' style={{ marginBottom: "50px" }}>
                    {
                        clubReduc.map((data, idx) => {
                            //  console.log(data);
                            return (
                                <div key={idx}>
                                    <Row>
                                        <Col>
                                            <Card style={{ display: 'flex', width: '180px', height: '350px', margin: '15px' }}>
                                                <CardImg top width="100%" src={data.club_image} alt="Card image cap" />
                                                <CardBody style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderStyle: "groove" }}>
                                                    <a className="rainbow-text" >{data.id + 1}:{data.club_name}</a>
                                                    <a style={{ fontSize: "10px" }}>{data.club_des}</a>
                                                    <a style={{ fontSize: "10px" }}>Total Member: {data.people}</a>
                                                </CardBody>
                                                <CardFooter style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
                                                    {JoinClub(data)}
                                                    {Whoisbutton(data)}
                                                </CardFooter>
                                            </Card>
                                        </Col>
                                    </Row>
                                </div>
                            )
                        }).reverse()
                    }
                </Container>
                {Whoisform()}
            </div>
            <footer className="App-footer">
                <p className='rainbow-text' style={{ fontSize: "x-large" }}>PSU-JoinClub miniproject for 240-311</p>
                <p>Copyright &copy; Prince of Songkla University , Phuket Campus</p>
            </footer>
        </div>
    )

}
export default Title;