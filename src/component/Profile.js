import React, { useState, useEffect } from 'react'
import '../App.css';
import Menubar from './Menubar';
import { Col, Row, Card, CardImg, CardBody, CardFooter, Button, Container } from 'reactstrap';

import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import ReduxClub, { listAction } from './redux/ReduxClub'
import { useHistory, Link } from 'react-router-dom'

const Profile = () => {
    const [userdata, setuserdata] = useState({
        name: localStorage.getItem('userpassport'),
        stdID: localStorage.getItem('IDuserpassport')
    })

    const [Idpsupass, setIdpsupass] = useState('')
    const history = useHistory()

    const dispatch = useDispatch()
    const Action = bindActionCreators(listAction, dispatch)
    const clubReduc = useSelector(state => state.clubReduc)

    const [newMember, setnewMember] = useState({
        name: '',
        stdID: ''
    })


    useEffect(() => {
        Action.getClub()
        setnewMember({
            name: localStorage.getItem('Nameuser'),
            stdID: localStorage.getItem('IDuserpassport')
        })

        // login check
        let user = localStorage.getItem('IDuserpassport');
        setIdpsupass(user)
        if (Idpsupass == null || undefined) {
            history.push('/')
        }

    }, [Idpsupass])

    const renderStudent = () => {
        return (
            <Card style={{ width: '50%', padding: '30px' }}>
                <h5>Student : {userdata.stdID}</h5>
                <a>ชื่อ : {userdata.name}</a>
                <a style={{ fontSize: "20px" }}>ชมรมที่เป็นสมาชิก</a>
                <Container style={{ display: 'flex', flexWrap: 'wrap', marginTop: '5px', justifyContent: 'center' }}>
                    {whatjoin()}
                </Container>

            </Card>
        )
    }

    const whatjoin = () => {
        let count = 0;
        return (
            clubReduc.map((data, idx) => {
                const clubData = clubReduc.find(item => item.id === data.id)
                if (clubData.member_name.length != 0) {
                    const result = clubData.member_name.find(member => member.stdID == newMember.stdID)
                    if (result) {
                        console.log('find name in ' + data.id);
                        console.log(result);
                        return (
                            <div key={idx}>
                                <Card style={{ display: 'flex', width: '90px', maxHeight: '160px', margin: '5px', marginBottom: '10px' }}>
                                    <CardImg top style={{ width: '100%' }} src={data.club_image} alt="Card image cap" />
                                    <a className="rainbow-text" style={{ width: '100%', fontSize: '10px', borderStyle: "groove", marginBottom: '5px' }} >{data.club_name}</a>
                                </Card>
                            </div>
                        )
                    }
                    else {
                        console.log('null');


                    }
                }
                else {
                    count += 1;
                    console.log('null member data' + count);
                    if (count === clubReduc.length) {
                        return (
                            <Container fluid={true} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                <h4 style={{ color: 'red' }} > ไม่ได้เป็นสมาชิกชมรมใด</h4>
                                <Button className="rainbow-text " style={{ fontSize: "15px", width: "200px" }} onClick={() => {
                                    history.push('/title')
                                }}>
                                    กดที่นี้ เพื่อเลือกชมรม
                                            </Button>
                                <CardImg width="60%" src="https://image.freepik.com/free-vector/female-friends-hanging-out-cafe_74855-5248.jpg" />
                            </Container>
                        )
                    }

                }
            }).reverse()
        )
    }



    return (
        <div>
            <Menubar />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: "somke", minHeight: "80vh", marginBottom: "15px" }}>
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