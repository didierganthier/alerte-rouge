import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function ContactComponent(){
    return (
        <div className="contact-container-bg">
            <Container className="contact-container">
                <Row>
                    <Col xs={12} md={6}>
                        <h1>Contactez Nous</h1>
                        <p>
                            Alerte Rouge est une application faite pour vous. Notre équipe travaille constamment pour vous fournir une application qui vous permet de sauver des vies.
                            N'hésitez pas à nous contacter pour plus d'informations.
                            L'équipe Alerte Rouge est composée de passionnés de la santé qui souhaitent apporter de l'aide à des personnes en difficulté.
                        </p>
                        <div>
                            <span className="fa fa-facebook"><img src="assets/facebook.png" width={30} height={30}/></span>
                            <span className="fa fa-instagram"><img src="assets/instagram.png" width={30} height={30}/></span>
                            <span className="fa fa-twitter"><img src="assets/twitter.png" width={30} height={30}/></span>
                        </div>
                    </Col>
                    <Col xs={12} md={3}>
                        <b>Links</b>
                        <br/>
                        <br/>
                        <h6>Overview</h6>
                        <h6>Social Media</h6>
                        <h6>Contact</h6>
                    </Col>
                    <Col xs={12} md={3}>
                        <b>Links</b>
                        <br/>
                        <br/>
                        <h6>Overview</h6>
                        <h6>Social Media</h6>
                        <h6>Contact</h6>
                    </Col>
                </Row>
            </Container>
        </div>
    );    
}

export default ContactComponent;