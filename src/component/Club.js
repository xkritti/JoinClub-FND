import React from 'react'
import '../App.css'
import { Card, CardBody, CardFooter, CardImg, Button } from 'reactstrap'

const Club = (props) => {
    const name = props.name;
    const id = props.id;
    const image = props.image
    return (
        <div>
            <Card style={{ display: 'flex', width: '180px', height: '350px', margin: '15px' }}>
                <CardImg top width="100%" src={image} alt="Card image cap" />
                <CardBody style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <a className="rainbow-text" >{id}:{name}</a>
                    <a style={{fontSize:"10px"}}>{props.des}</a>
                </CardBody>
                <CardFooter style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <Button style={{ margin: '5px' }}>join</Button>
                </CardFooter>
            </Card>
        </div>
    )

}
export default Club;