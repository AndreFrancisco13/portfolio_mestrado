import React from 'react';
import Header from "./components/Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Routes, Route } from "react-router-dom";
import Erro from "./components/Pages/Erro";
import Contactos   from "./components/Pages/Contactos";
import Sobre from "./components/Pages/Sobre";
import Experiencia from "./components/Pages/Experiencia";
import Portfolio from "./components/Pages/Portfolio";
import "./gerais.css"
import {Container, Row, Col} from "reactstrap";


function App() {

  return (

      <div className="App">
          <HashRouter>
              <Routes>
                  <Route path="/" element={<Header />}>
                      <Route index element={<Home />} />
                      <Route path="about" element={<Sobre />} />
                      <Route path="experience" element={<Experiencia />} />
                      <Route path="portfolio" element={<Portfolio />} />
                      <Route path="contacts" element={<Contactos />} />
                      <Route path="*" element={<Erro/>} />
                  </Route>
              </Routes>
          </HashRouter>

      </div>
  );
}

export default App;


const Home = () => {

  return(
   <div className='home pt-6'>
       <Container>

           <Row className='align-content-end'>
               <Col md={5} xs={2}>
               </Col>
               <Col md={7} xs={10} className="m-auto">
                   <h1 className='homeTitle pt-5 '>I'm a Web Dev && UI-UX </h1>
                   <h1 className='fs-3 text-white fw-light font-monospace pt-4 homeSubtitle colorBlue'>André Francisco</h1>
               </Col>
           </Row>

       </Container>
   </div>
  )

}










