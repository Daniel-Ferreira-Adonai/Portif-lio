import Nav from 'react-bootstrap/Nav';
import {Container, Row, Col, Tab} from "react-bootstrap"
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/placeHolder.png"
import projImg2 from "../assets/img/portf.png"
import projImg3 from "../assets/img/dino.png"
import projImg4 from "../assets/img/jogoHtml.png"
import projImg5 from "../assets/img/landingPage.png"
import projImg6 from "../assets/img/calculator.png"


export const Projects = () => {
    const projects = [
        {
            title: "Portfólio",
            description: "React, Nodejs, html, css, bootstrap",
            imgUrl: projImg2,
        },
        {
            title: "Dino Game",
            description: "Jogo educativo, Gdscript",
            imgUrl: projImg3,
        },
        {
            title: "Jogo de turno",
            description: "html, css, javascript",
            imgUrl: projImg4,
        },
        {
            title: "Landing page advogado",
            description: "html, css, javascript",
            imgUrl: projImg5,
        },
        {
            title: "Logical calculator",
            description: "Calculadora lógica, Nodejs, Express, html, css",
            imgUrl: projImg6,
        },
        {
            title: "PlaceHolder",
            description: "PlaceHolder",
            imgUrl: projImg1,
        },



    ];
    return( 
        <section className="project" id="project">
            <Container>
            <Row>
                <Col>
                <h2>Projetos</h2>
                <p>Alguns de meus projetos que venho trabalhando ao longo deste primeiro ano aprendendo programção</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first" >
                <Nav variant="pills" defaultActiveKey="/Skills">
                    <Nav.Item >
                        <Nav.Link href="first" disabled>Aba 1</Nav.Link>
                    </Nav.Item>
                    
                    <Nav.Item>
                      
                    </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <Row>
                                {
                                    projects.map((projects, index) => {
                                        return (
                                            <ProjectCard
                                            key={index}
                                            {...projects}
                                            />
                                        )
                                    })
                                }
                            </Row>
                        </Tab.Pane>
                       
                        <Tab.Pane eventKey="second"><p>whatever</p></Tab.Pane>
                        <Tab.Pane eventKey="third" > <p>whatever</p> </Tab.Pane>


                    </Tab.Content>
                    </Tab.Container>

                </Col>
            </Row>
            </Container>
        </section>

    )

}