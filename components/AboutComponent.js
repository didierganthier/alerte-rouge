import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function AboutComponent() {
  return (
    <div className="about-container-bg">
      <Container>
        <Row>
            <Col xs={12} md={6}>
                <img className="img-fluid" src="/assets/working.png" width={800} height={800}/>
            </Col>
            <Col xs={12} md={6} className="about-details">
                <h2>Alerte Rouge</h2>
                <b>Alerte Rouge est une application faite pour vous.</b>
                <p align="justify">
                Nous Sommes une entreprise technologique à but non lucratif, évoluant dans le secteur médical plus précisément dans le don de sang. 
                Nous offrons la possibilité à des personnes en nécessité de faire une requête de sang pour leur proche,
                à d'autres de répondre à une requête, et de gérer ses dons de sang aux donneurs réguliers et volontaires.
                Notre objectif c'est de pourvoir donner un outil assez interessant et puissant permetant de dinamiser le don de sang.
                </p>
                <a href="http://onelink.to/53ex9t" target="_blank"><button className="btn btn-custom">Explorer</button></a>
            </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutComponent;