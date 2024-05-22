import React from "react";
import {Col, Container, Row} from "reactstrap";
import andre from "../../andre.png";
import '../../gerais.css'



export default function Sobre() {

    return (
        <div className='pt-6'>
            <Container className='p-4'>
                <Row className='pt-4'>
                    <Col md={12}>
                        <Row>
                            <Col md={7} sm={10}>
                                <h1 className='homeTitle2 text-start'>Keep moving</h1>
                                <h1 className='fs-2 fw-medium font-monospace pt-3 text-white mt-5'>André Francisco</h1>
                                <p className='text-white'>
                                    <span className='p-1 colorBlue fs-4'>{'<'}</span>
                                    I'm an outgoing person, dynamic and always looking for new opportunities for personal and professional growth.
                                    I'm always looking for new chances and I fight for them. I reinvent myself every day in search of the best version of myself,
                                    giving that version to the people around me and with whom I work!
                                    <span className='p-1 colorBlue fs-4'>{'/>'}</span>
                                </p>
                            </Col>
                            <Col md={5} sm={10} className="d-flex flex-column justify-content-end ">
                                <img src={andre} alt="André Francisco" className='img-fluid align-self-end desaparece'/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>

    );
}

