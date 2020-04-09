import React from "react"
import { Input, Container, InputGroup, InputGroupText, InputGroupAddon } from "reactstrap"

import '../App.css'

const Inputform = () => {

    return (
        <Container className="input-form">
            <a className="rainbow-text">
                เอาไว้เพิ่ม และ แก้ไขข้อมูลนะจ้ะ
       </a>
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>@</InputGroupText>
                </InputGroupAddon>
                <Input placeholder="username" />
            </InputGroup>
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>@</InputGroupText>
                </InputGroupAddon>
                <Input placeholder="username" />
            </InputGroup>
        </Container>
    )
}
export default Inputform 