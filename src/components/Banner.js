import React, { useState, useEffect } from 'react';
import {Container, Row, Col} from "react-bootstrap"
import {ArrowRightCircle} from "react-bootstrap-icons"
import headerImg from "../assets/img/header.svg"
export const Banner = () => {
    const [loopNum,setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Desenvolvedor Web", "Desenvolvedor Back-End", "Dev Entusiasta"];
    const [text, setText] = useState("");
    const period = 2000;
    const [delta, setDelta] = useState(300 - Math.random() * 100);

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => {clearInterval(ticker)}

    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting 
          ? fullText.substring(0, text.length - 1) 
          : fullText.substring(0, text.length + 1);
      
        setText(updatedText);
      
        if (isDeleting) {
          setDelta((prevDelta) => prevDelta / 2);
        }
      
        if (!isDeleting && updatedText === fullText) {
          setIsDeleting(true);
          setDelta(period);
        } else if (isDeleting && updatedText === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setDelta(500);
        }
      };
   return (
  <section className="banner" id="home">
    <Container>
      <Row className="align-items-center">
        <Col xs={12} md={6} xl={7}> 
          <span className="tagline">Bem-vindo ao meu portfólio</span>
          <h1>{`Olá, me chamo Daniel Ferreira`}<span className="wrap"> {text} </span></h1>
          <p>Sou estudante da Universidade de Fortaleza e apaixonado por programação. Neste primeiro ano, descobri que criar soluções que realmente ajudam as pessoas é o que mais me motiva. Sinto que encontrei meu caminho nessa área e estou decidido a seguir em frente com ética e confiança.</p>
          <button onClick={() => {
           
    const recipient = 'd.calpi100@hotmail.com';
    const subject = 'Hello';
    const body = 'Hi there!\n\nThis is a test email.';

    
    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    
    window.location.href = mailtoUrl;
  
          }}>Me mande um email</button>
        </Col>
        <Col xs={12} md={6} xl={5} className="image-container"> 
          <img src={headerImg} alt="header img" />
        </Col>
      </Row>
    </Container>
  </section>
);

}