import React from 'react';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
} from 'reactstrap';
import '../App.css';

const Login = () => {
    return (
        <Container className="Login">
            <h2>Sign In</h2>
            <Form className='from'>
                <Col>
                    <FormGroup>
                        <Label>Email</Label>
                        <Input
                            type="email"
                            name="email"
                            id="exampleEmail"
                            placeholder="myemail@email.com"
                        />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input
                            type="password"
                            name="password"
                            id="examplePassword"
                            placeholder="********"
                        />
                    </FormGroup>

                </Col>
                <Button color="primary" style={{width:"100px",margin:"10px"}}>Sing in</Button>
                <Button color='danger' style={{width:"100px",margin:"10px"}}>Sing up</Button>

            </Form>
        </Container>
    );
}

export default Login;