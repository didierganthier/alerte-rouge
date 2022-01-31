import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

function ContactComponent(){
    return (
        <div className="contact-container-bg">
            <Container className="contact-container">
                <Row>
                    <Col xs={12} md={7}>
                        <h1>Contactez Nous</h1>
                        <p align="justify">
                          N&apos;hésitez pas à nous contacter si vous avez des questions, ou des suggestions
                          Contactez-nous <b>+50931077373 </b> ou par email: <b>contact@alerterouge.org </b> <br/>
                          L&apos;équipe Alerte Rouge sera toujours disponible pour vous servir.
                        </p>
                        
                        <div> 
                        
                          <a href= "https://www.facebook.com/profile.php?id=100075500118346" target="_blank" rel="noreferrer"><span className="fa fa-facebook"> <Image src="assets/facebook.png" width={30} height={30} alt="Facebook Logo"/></span></a> 
                            <a href= "https://www.instagram.com/alerterougeht/" target="_blank" rel="noreferrer"> <span className="fa fa-instagram"><Image src="assets/instagram.png" width={30} height={30} alt="Instagram Logo"/></span></a>
                            <a href="https://twitter.com/alerterougeht" target="_blank" rel="noreferrer"><span className="fa fa-twitter"><Image src="assets/twitter.png" width={30} height={30} alt="Twitter Logo"/></span> </a> 
                        </div>

                    </Col>

                </Row>
                <Row>
                    <Col xs={8} md={10}>
                        <b>Liens Utiles</b>
                        <br/>
                        <br/>
                        <a href="https://docs.google.com/document/d/1NyEL4i-E5GBue69W9goH20Cqo8rpIaQ1OcsnKFimkZc/edit" target="blank" rel="noreferrer"><h6>Formulaire</h6></a><br/>
                        <a href="https://docs.google.com/document/d/1NyEL4i-E5GBue69W9goH20Cqo8rpIaQ1OcsnKFimkZc/edit" target="blank" rel="noreferrer"><h6>Planifier un Don</h6></a><br/>
                        <a href="https://docs.google.com/document/d/1NyEL4i-E5GBue69W9goH20Cqo8rpIaQ1OcsnKFimkZc/edit" target="blank" rel="noreferrer"><h6>Passer le test d&apos;eligibilite</h6></a>
                    </Col>
    
                </Row>
            </Container>
        </div>
    );    
}

export default ContactComponent;