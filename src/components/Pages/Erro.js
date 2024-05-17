import React from "react";
import { Container, Alert, Button, Col, Row } from "reactstrap";
import '../../gerais.css'
import { Link } from "react-router-dom";


export default function Erro() {
    return (

    <Container className=" pt-6 p-4">
            <Row className='pt-4 pb-3'>
                <Col md={7} sm={10}>
                    <h1 className='homeTitle2 text-start'>Error</h1>
                    <h1 className='fs-2 fw-light font-monospace pt-3 text-white'>This page doesn't exist!!</h1>
                    <Button className='mt-3 '><Link className='text-white text-decoration-none' to='/'> Back to home  </Link> </Button>

                    
                </Col>
        </Row>
    </Container>

);


}

