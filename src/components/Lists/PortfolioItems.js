import React from 'react';
import {
    Card,
    CardBody,
    CardText,
    CardTitle,
    Container,
    Col,
    Row,
    Button
} from "reactstrap";
import { Link } from "react-router-dom";
import WorkDetail from './Workdetail';
import '../../gerais.css'; // Ajuste o caminho do CSS geral, se necessário

import topIndian from "../../imagens/topIndian.png";
import planetario from "../../imagens/planetarium.png";
import travel from "../../imagens/travel.png";
import lodo from "../../imagens/lodo.png";
import opposti from "../../imagens/oposti.png";
import sara from "../../imagens/sara.png";
import portfolio from "../../imagens/portfolio.png";
import chronos from "../../imagens/chronos.png";


const works = [
    {
        id: 1,
        title: "Opposti",
        categories: [4],
        media: opposti,
    },
    {
        id: 2,
        title: "Lodo",
        categories: [1],
        media: lodo,
    },
    {
        id: 3,
        title: "Travel",
        categories: [1, 3],
        media: travel,
    },
    {
        id: 4,
        title: "Top Indian Movies",
        categories: [1, 2],
        media: topIndian,
    },
    {
        id: 5,
        title: "Planetarium Pursuit",
        categories: [1, 2],
        media: planetario,
    },
    {
        id: 6,
        title: "SARA",
        categories: [4],
        media: sara,
    },
    {
        id: 7,
        title: "This Portfolio",
        categories: [3],
        media: portfolio,
    },
    {
        id: 8,
        title: "Chronos",
        categories: [3, 4, 1],
        media: chronos,  
    },
];

const PortfolioItems = ({ isClicked }) => {
    const filteredWorks = isClicked
        ? works.filter((work) => work.categories.includes(isClicked))
        : works;

    return (
        <div className='text-white'>
            <Container className='p-0 m-0'>
                <Row className='mt-5'>
                    {filteredWorks.map((work) => (
                        <Col xs={12} md={6} key={work.id} className="mb-4">
                            <Card className="h-100 border-0 rounded-0">
                                <CardBody className='bg-blue'>
                                    <CardText>
                                        <img src={work.media} alt={work.title} className="img-fluid"/>
                                    </CardText>
                                    <CardTitle className='h2 text-center text-white text-uppercase fw-bolder pt-2 pb-2'>{work.title}</CardTitle>
                                    <p className='text-center'>
                                        <Link to={`/workdetail/${work.id}`} >
                                            <Button className='bg-transparent colorBlue fs-5 fw-bold border-2'>
                                                    Read More
                                            </Button>
                                            
                                        </Link>
                                    </p>
                                </CardBody>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default PortfolioItems;