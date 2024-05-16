
import React, {useState} from "react";
import PortfolioItems from "../Lists/PortfolioItems";
import {Col, Container, Row} from "reactstrap";
import { FaBootstrap } from "react-icons/fa";
import { SiPhp } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { PiFigmaLogoFill } from "react-icons/pi";



export default function Portfolio() {

    const [isActivated, setIsActivated] = useState(false);
    const [isClicked, setIsClicked] = useState(1);
    console.log(isClicked);
   return (
       <div className='pt-6'>
           <Container className='p-4'>
               <Row className='pt-4'>
                   <Col md={7} sm={10}>
                       <h1 className='homeTitle2 text-start'>HCD first</h1>
                       <h1 className='fs-2 fw-medium font-monospace pt-3 text-white mt-5'>Some of my work</h1>
                       <p className='fst-italic fs-7 text-white'>(choose the technology) </p>
                   </Col>
                   <Col md={5} sm={2} className="m-auto">

                   </Col>
                   <Row className='justify-content-center'>
                   <Col xs={2} className='p-2 m-2 text-center'>
                          <FaBootstrap className= {`icon m-0 ${isClicked === 1 ? 'colorBlue' : 'text-grey'}`}  onClick={ ()=>setIsClicked (1)}/>
                   </Col>
                     <Col xs={2}  className='p-2 m-2 text-center'>
                              <SiPhp className= {`icon m-0 ${isClicked === 2 ? 'colorBlue' : 'text-grey'}`}   onClick={()=>setIsClicked(2)}/>
                        </Col>
                        <Col xs={2}  className='p-2 m-2 text-center'>
                              <TbBrandReactNative className={`icon m-0 ${isClicked === 3 ? 'colorBlue' : 'text-grey'}`} onClick={()=>setIsClicked (3)}/>
                        </Col>
                        <Col xs={2}  className='p-2 m-2 text-center'>
                              <PiFigmaLogoFill className={`icon m-0 ${isClicked === 4 ? 'colorBlue' : 'text-grey'}`}  onClick={()=>setIsClicked(4)}/>
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

