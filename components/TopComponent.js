import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function TopComponent(){
    return(
        <>
            <div className="background"></div>
            <div className="texture">
                <Container className="container-top">
                    <Row className="section-top">
                        <Col xs={12} md={6} className="section-top-left">
                            <img className="img-fluid" src="/assets/mobile.png"/>
                        </Col>
                        <Col xs={12} md={6} className="section-top-right">
                            <div className="plate-image-container"></div>
                            <h6>Alerte Rouge</h6>
                            <h2>Sauvez des Vies</h2>
                            <h1>Alerte Rouge</h1>
                            <p>Faites un don de sang pour sauver quelqu'un en difficulté. 
                                Partagez une requête pour aider quelqu'un en difficulté. 
                                Sauvez des Vies.
                            </p>
                            <button className="btn btn-custom">Télécharger l'appli</button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default TopComponent;