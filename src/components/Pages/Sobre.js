import React from "react";
import {Col, Container, Row} from "reactstrap";
import andre from "../../andre.png";
import '../../gerais.css'
import Typewriter from "typewriter-effect";
import {introdata} from "../infos/infos";
import {worktimeline} from "../infos/infos";
import '../infos/animated_comp.css'


export default function Sobre() {

    return (
        <div className='pt-6'>
            <Container className='p-4'>
                <Row className='pt-4'>
                    <Col md={12}>
                        <Row>
                            <Col md={7} sm={10}>
                                <h1 className='homeTitle2 text-start'>
                                        <Typewriter
                                        options={{
                                        strings: [
                                        introdata.animated.first,
                                        ],
                                        autoStart: true,
                                        loop: true,
                                        deleteSpeed: 50,
                                        pauseFor: 200000,
                                    }}
                                />
                                </h1>
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
                    <Col md={12}>
                            <h3 className="fw-medium font-monospace pt-3 text-white mt-5 pb-2">Life Timeline</h3>
                        </Col>
                        <Col lg={7}>
                            <table className="table caption-top ">
                            <tbody>
                                {worktimeline.map((data, i) => {
                                return (
                                    <tr key={i}>
                                    <th scope="row">{data.jobtitle}</th>
                                    <td>{data.where}</td>
                                    <td>{data.date}</td>
                                    </tr>
                                );
                                })}
                            </tbody>
                            </table>
                        </Col>

                </Row>
            </Container>
        </div>

    );
}

