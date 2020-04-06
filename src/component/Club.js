import React from 'react'
import '../App.css'
import { Card, CardBody, CardFooter, CardImg, Button } from 'reactstrap'

const Club = (props) => {
    const name = props.name;
    const id = props.id;
    return (
        <div>
            <Card style={{ display: 'flex', width: '180px', height: '200px', margin: '15px'}}>
                <CardBody style={{ display: 'flex',flexDirection:'column' ,alignItems:'center',justifyContent:'center'}}>
                    <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                    {id}:{name}
                </CardBody>
                <CardFooter style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <Button style={{ margin: '5px' }}>join</Button>
                    <Button style={{ margin: '5px' }}>join</Button>
                </CardFooter>
            </Card>
        </div>
    )

}
export default Club;