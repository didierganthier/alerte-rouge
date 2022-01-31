import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

function TopComponent(){
    return(
        <>
            <div className="background"></div>
            <div className="texture">
                <Container className="container-top">
                    <Row className="section-top">
                        <Col xs={12} md={6} className="section-top-left">
                            <Image className="img-fluid" src="/assets/fullsimulator.png" width={500} height={500} alt="Ecran Application"/>
                        </Col>
                        <Col xs={12} md={6} className="section-top-right">
                            <div className="plate-image-container"></div>
                            <h6>Alerte Rouge</h6>
                            <h2>Sauvez des Vies</h2>
                            <h1>Alerte Rouge</h1>
                            <p align="justify">Faites un don de sang pour sauver quelqu&apos;un en difficulté. 
                                Partagez une requête pour aider quelqu&apos;un en difficulté. 
                                Sauvez des Vies.
                            </p>
                            <a href="http://onelink.to/53ex9t"><button className="btn btn-custom">Télécharger l&apos;appli</button></a>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default TopComponent;