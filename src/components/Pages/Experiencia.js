
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Row} from "reactstrap";
import React from "react";
import js from "../../logos/js.png";
import css from "../../logos/CSS3.png";
import html from "../../logos/HTML5.png";
import react from "../../logos/react.png"
import tailwind from "../../logos/Tailwind.png";
import php from "../../logos/php.png";
import bootstrap from "../../logos/bootstrap.png";
import adobe from "../../logos/Adobe_Photoshop.png";
import figma from "../../logos/figma.png";
import adobe_pr from "../../logos/adobe_premiere.png";

import { FaBootstrap } from "react-icons/fa";
import { SiPhp } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { PiFigmaLogoFill } from "react-icons/pi";
import { DiJavascript } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { BiLogoHtml5 } from "react-icons/bi";
import { SiTailwindcss } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobepremierepro } from "react-icons/si";
import Typewriter from "typewriter-effect";
import {introdata} from "../infos/infos";
import {skills} from "../infos/infos";
import '../infos/animated_comp.css'


export default function Experiencia() {


return(
    <div className='pt-6'>
        <Container className='p-4'>
            <Row className='pt-4'>
                <Col md={7} sm={10}>
                    <h1 className='homeTitle2 text-start'>
                    <Typewriter
                                        options={{
                                        strings: [
                                        introdata.animated.second,
                                        ],
                                        autoStart: true,
                                        loop: true,
                                        deleteSpeed: 50,
                                        pauseFor: 200000,
                                    }}
                                />
                    </h1>
                    <h1 className='fs-2 fw-medium font-monospace pt-3 text-white mt-5'>Background</h1>
                </Col>
                <Col md={5} sm={2} className="m-auto">

                </Col>
                <Col sm={10} md={7}>
                    <p className='text-white'>
                        <span className='p-1 colorBlue fs-4'>  {'< '}</span>
                        With a degree in Gerontology from UA, completed in 2012, the connection to people has always been very present
                        throughout my life. Although I followed a different path from the health sector, I dedicated a large part of my career working in customer service and managing teams in the food industry.
                        At the moment I'm also concerned with customers, but I've turned to online platform users so that they can achieve their goals in the most effective, efficient and rewarding way!

                        <span className='p-1 colorBlue fs-4'>  {' />'}</span>

                    </p>
                </Col>
                <Col sm={12} md={6} className='mt-5'>
                    <h1 className='fs-2 fw-medium font-monospace pt-3 text-white'>Interpersonal skills</h1>
                    <ul className='p-0'>
                        <li className='text-white list-unstyled fs-4 pt-3'> <span className='p-1 colorBlue fs-4'>  {' <'}</span>Teamwork <span className='p-1 colorBlue fs-4' >  {'  />'}</span></li>
                        <li className='text-white list-unstyled fs-4 pt-3'> <span className='p-1 colorBlue fs-4'>  {'  <'}</span>Leadership <span className='p-1 colorBlue fs-4'>  {'  />'}</span></li>
                        <li className='text-white list-unstyled fs-4 pt-3'> <span className='p-1 colorBlue fs-4'>  {'  <'}</span>Communication <span className='p-1 colorBlue fs-4'>  {'  />'}</span></li>
                        <li className='text-white list-unstyled fs-4 pt-3'> <span className='p-1 colorBlue fs-4'>  {'<'}</span>Problem solving <span className='p-1 colorBlue fs-4'>  {'  />'}</span></li>
                        <li className='text-white list-unstyled fs-4 pt-3'> <span className='p-1 colorBlue fs-4'>  {'  <'}</span>Adaptability <span className='p-1 colorBlue fs-4'>  {'  />'}</span></li>
                        <li className='text-white list-unstyled fs-4 pt-3'> <span className='p-1 colorBlue fs-4'>  {'  <'}</span>Empathy</li>
                        <li className='text-white list-unstyled fs-4 pt-3'> <span className='p-1 colorBlue fs-4'>  {'  <'}</span>Creativity <span className='p-1 colorBlue fs-4'>  {'  />'}</span></li>
                        <li className='text-white list-unstyled fs-4 pt-3'> <span className='p-1 colorBlue fs-4'>  {'  <'}</span>Critical thinking <span className='p-1 colorBlue fs-4'>  {'  />'}</span></li>
                        <li className='text-white list-unstyled fs-4 pt-3'> <span className='p-1 colorBlue fs-4'>  {'  <'}</span>Time management <span className='p-1 colorBlue fs-4'>  {'  />'}</span></li>
                    </ul>
                </Col>
                <Col sm={12} md={6} className='mt-5'>

                    <h1 className='fs-2 fw-medium font-monospace pt-3 text-white '>Technical skills</h1>
                    <Col className='justify-content-center'>
                     
                    {skills.map((data, i) => {
                    return (
                        <div key={i}>
                        <h3 className="progress-title  ">{data.name}</h3>
                        <div className="progress">
                            <div
                            className="progress-bar"
                            style={{
                                width: `${data.value}%`,
                            }}
                            >
                            <div className="progress-value">{data.value}%</div>
                            </div>
                        </div>
                        </div>
                    );
                    })}
                </Col>
                </Col>
            </Row>
        </Container>
    </div>
    );
}

