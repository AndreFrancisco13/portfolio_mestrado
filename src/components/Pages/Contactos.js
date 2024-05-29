
import "bootstrap/dist/css/bootstrap.min.css";
import {Col, Container, Row} from "reactstrap";
import { MdOutgoingMail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import Typewriter from "typewriter-effect";
import {introdata} from "../infos/infos";

import '../../gerais.css'
export default function Contactos() {

return(
    <div className='pt-6'>
        <Container className='p-4'>
            <Row className='pt-4'>
                <Col sm={10}>
                    <h1 className='homeTitle2 text-start'>
                    <Typewriter
                                     options={{
                                    strings: [
                                    introdata.animated.fourth,
                                    ],
                                    autoStart: true,
                                    loop: true,
                                    deleteSpeed: 50,
                                    pauseFor: 200000,
                                }}/>
                    </h1>
                    <h1 className='fs-2 fw-medium font-monospace pt-3 text-white'>Social and personal contacts</h1>
                </Col>
                <Col md={5} sm={2} className="m-auto">
                </Col>
            </Row>
            <Row>
                <Col xs={3} className="text-center">
                    <a href="mailto:asfrancisco@ua.pt" aria-label="Send Email">
                        <MdOutgoingMail className='icon text-grey'/>
                    </a>
                </Col>
                <Col xs={3} className="text-center">
                    <a href="tel:+351910255667" aria-label="Make a Call">
                        <IoLogoWhatsapp className='icon text-grey' />
                    </a>
                </Col>
                <Col xs={3} className="text-center">
                    <a href="https://github.com/AndreFrancisco13" target="_blank" rel="noopener noreferrer" aria-label="Visit GitHub">
                        <FaGithub className='icon text-grey'/>
                    </a>
                </Col>
                <Col xs={3} className="text-center">
                    <a href="https://www.linkedin.com/in/andre-santos-francisco/" target="_blank" rel="noopener noreferrer" aria-label="Visit LinkedIn">
                        <IoLogoLinkedin className='icon text-grey' />
                    </a>
                </Col>
            </Row>
        </Container>
    </div>
    )

}