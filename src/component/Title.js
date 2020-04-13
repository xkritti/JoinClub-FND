import React, { useState, useEffect } from 'react'
import '../App.css';
import { Row, Col, Container, Card, CardBody, CardFooter, CardImg, Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap'
import Club from './Club';
import Menubar from './Menubar';
import { bindActionCreators } from 'redux';
import { listAction } from './redux/ReduxClub'
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
    const getClub = useSelector(state => state.getClub)
    const Action = bindActionCreators(listAction, useDispatch())
    // const [detail, setDetail] = useState({
    //     id: 1,
    //     club_name: '',
    //     club_image: '',
    //     club_des: '',
    //     member_name: [{
    //         name: "",
    //         stdID: ""
    //     }],
    //     people: 0
    // })

    const resiveData = () => {
        Action.getClub()
    }

    useEffect(() => {
        let IDuser = localStorage.getItem('IDuserpassport');
        let user = localStorage.getItem('userpassport');
        setUsername(user)
        resiveData()
    }, [])


    const sendNewdata = () => {
        let id = (clubReduc.length === 0) ? 1 : clubReduc[clubReduc.length - 1].id + 1
        if (newData.club_name && newData.club_image && newData.club_des) {
            newData.id = id
            Action.addClub(newData)
            alert("ID Club is " + clubReduc.length)
            window.location.reload();
        }
        else {
            alert("Pls in put Detail of Club")
        }
    }

    const whois = (data) => {
        let id = localStorage.getItem('IDuserpassport')
        console.log(data)
        if (id === '5935512001') {
            return (
                <Button color="danger" style={{ margin: '5px' }}
                    onClick={() => {
                        Action.deleteClub(data.id)
                        setTimeout(() => {
                            window.location.reload()
                        }, 500)
                    }}>Delete</Button>
            )
        }
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
                            // console.log(data);
                            return (
                                <div key={idx}>
                                    <Row>
                                        <Col>
                                            <Card style={{ display: 'flex', width: '180px', height: '350px', margin: '15px' }}>
                                                <CardImg top width="100%" src={data.club_image} alt="Card image cap" />
                                                <CardBody style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderStyle: "groove" }}>
                                                    <a className="rainbow-text" >{data.id + 1}:{data.club_name}</a>
                                                    <a style={{ fontSize: "10px" }}>{data.club_des}</a>
                                                </CardBody>
                                                <CardFooter style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                                    <Button color="primary" style={{ margin: '5px' }}>Join</Button>
                                                    {whois(data)}
                                                </CardFooter>
                                            </Card>
                                        </Col>
                                    </Row>
                                </div>
                            )
                        }).reverse()
                    }
                </Container>
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
                    <h1>AddClubForm</h1>
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
            </div>
            <footer className="App-footer">
                <p className='rainbow-text' style={{ fontSize: "x-large" }}>PSU-JoinClub miniproject for 240-311</p>
                <p>Copyright &copy; Prince of Songkla University , Phuket Campus</p>
            </footer>
        </div>
    )

}
export default Title;