
import React, {useState} from "react";
import PortfolioItems from "../Lists/PortfolioItems";
import {Col, Container, Row} from "reactstrap";
import { FaBootstrap } from "react-icons/fa";
import { SiPhp } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { PiFigmaLogoFill } from "react-icons/pi";
import Typewriter from "typewriter-effect";
import {introdata} from "../infos/infos";




export default function Portfolio() {

    const [isActivated, setIsActivated] = useState(false);
    const [isClicked, setIsClicked] = useState(1);
    console.log(isClicked);
   return (
       <div className='pt-6'>
           <Container className='p-4'>
               <Row className='pt-4'>
                   <Col sm={10}>
                       <h1 className='homeTitle2 text-start'>
                       <Typewriter
                                     options={{
                                    strings: [
                                    introdata.animated.third,
                                    ],
                                    autoStart: true,
                                    loop: true,
                                    deleteSpeed: 50,
                                    pauseFor: 200000,
                                }}/>
                       </h1>
                       <h1 className='fs-2 fw-medium font-monospace pt-3 text-white mt-5'>Some of my work</h1>
                       <p className='fst-italic fs-7 text-white'>(choose the technology) </p>
                   </Col>
                   <Col md={5} sm={2} className="m-auto">

                   </Col>
                   <Row className='justify-content-center'>
                   <Col xs={2} className='p-1 m-2 text-center'>
                          <FaBootstrap className= {`icon m-0 ${isClicked === 1 ? 'colorBlue_2' : 'text-grey'}`}  onClick={ ()=>setIsClicked (1)}/>
                   </Col>
                     <Col xs={2}  className='p-1 m-2 text-center'>
                              <SiPhp className= {`icon m-0 ${isClicked === 2 ? 'colorBlue_2' : 'text-grey'}`}   onClick={()=>setIsClicked(2)}/>
                        </Col>
                        <Col xs={2}  className='p-1 m-2 text-center'>
                              <TbBrandReactNative className={`icon m-0 ${isClicked === 3 ? 'colorBlue_2' : 'text-grey'}`} onClick={()=>setIsClicked (3)}/>
                        </Col>
                        <Col xs={2}  className='p-1 m-2 text-center'>
                              <PiFigmaLogoFill className={`icon m-0 ${isClicked === 4 ? 'colorBlue_2' : 'text-grey'}`}  onClick={()=>setIsClicked(4)}/>
                        </Col>


                   </Row>
               </Row>
               <Row>
                   <Col xs={12}>
                          <PortfolioItems  isClicked={isClicked}/>
                   </Col>
               </Row>
           </Container>
       </div>
    );

}

