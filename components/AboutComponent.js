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
                <p>
                Notre équipe travaille constamment pour vous fournir une application qui vous permet de sauver des vies.
                N'hésitez pas à nous contacter pour plus d'informations.
                L'équipe Alerte Rouge est composée de passionnés de la santé qui souhaitent apporter de l'aide à des personnes en difficulté.
                </p>
                <button className="btn btn-custom">Explorer</button>
            </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutComponent;