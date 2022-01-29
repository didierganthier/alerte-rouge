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
                            N'hésitez pas à nous contacter si vous avez des questions, appelez le +50931077373. 
                            ou ecrivez a l'adresse: contact@alerterouge.org 
                            L'équipe Alerte Rouge est disponible pour vous servir.
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