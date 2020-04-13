import React, { useState, useEffect } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { listAction } from './redux/ReduxClub'
import { connect, useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'

function Login() {
    const dispatch = useDispatch()
    const ListAction = bindActionCreators(listAction, dispatch)
    const login = useSelector(state => state.login)
    const history = useHistory()
    const [userdata, setUser] = useState({
        username: "",
        password: ""
    })

    const [message, setMessage] = useState('')

    useEffect(() => {
        if (login.id) {
            history.push('/title')
            let userpassport = login.id + "  " + login.username + " " + login.surname
            let IDuserpassport = login.id
            localStorage.setItem('userpassport', userpassport)
            localStorage.setItem('IDuserpassport', IDuserpassport)
        }
        if (localStorage.getItem('userpassport') !== null) {
            history.push('/title')
        }
        else {
            history.push('/')
        }
    }, [login])

    const sendData = () => {
        if (userdata.username && userdata.password) {
            ListAction.login(userdata)
        } if (!login.id) {
            setTimeout(() => {
                setMessage("Incorrect user ID or password")
            }, 4000)
        }
        else {
            setMessage("Incorrect user ID or password")
        }
    }

    return (
        <div className="rainbow-bg" style={{ display: "flex", flexDirection: "column", height: "90vh", justifyContent: "center", height: "100vh" }}>
            <Container style={{ width: "50vh", borderWidth: "40px", borderStyle: "outset", padding: "10px", backgroundColor: "white" }}>
                <Form>
                    <Row>
                        <Col>
                            <FormGroup align="center">
                                <div>
                                    <h4 className="rainbow-text">LOGIN PSU PASSPORT</h4>
                                </div>
                                <div className="formIP">
                                    <Label className="textLabel">Username</Label>
                                </div>
                                <Input className="ip1" type="text" name="username" onChange={(e) => setUser({ ...userdata, username: e.target.value })} placeholder="Username" />
                                <div className="formIP">
                                    <Label className="textLabel">Password</Label>
                                </div>
                                <Input className="ip1" type="password" name="password" onChange={(e) => setUser({ ...userdata, password: e.target.value })} placeholder="Password" />
                                <p className="message">{message}</p>
                                <Button className="rainbow-bg" style={{ width: "100%", marginTop: "20px", fontWeight: "bolder" }}
                                    onClick={() => {
                                        sendData()
                                    }}>LOGIN</Button>
                            </FormGroup>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </div>
    );
}

const mapStateToProps = state => ({ login: state.login })

export default connect(mapStateToProps)(Login);