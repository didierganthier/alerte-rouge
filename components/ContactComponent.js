import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function ContactComponent(){
    return (
        <div className="contact-container-bg">
            <Container className="contact-container">
                <Row>
                    <Col xs={12} md={7}>
                        <h1>Contactez Nous</h1>
                        <p align="justify">
                          N'hésitez pas à nous contacter si vous avez des questions, ou des suggestions
                          Contactez-nous <b>+50931077373 </b> ou par email: <b>contact@alerterouge.org </b> <br/>
                            L'équipe Alerte Rouge sera toujours disponible pour vous servir.
                        </p>
                        
                        <div> 
                        
                          <a href= "https://www.facebook.com/profile.php?id=100075500118346" target="_blank" ><span className="fa fa-facebook"> <img src="assets/facebook.png" width={30} height={30}/></span></a> 
                            <a href= "https://www.instagram.com/alerterougeht/" target="_blank" > <span className="fa fa-instagram"><img src="assets/instagram.png" width={30} height={30}/></span></a>
                            <a href="https://twitter.com/alerterougeht" target="_blank" ><span className="fa fa-twitter"><img src="assets/twitter.png" width={30} height={30}/></span> </a> 
                        </div>

                    </Col>

                </Row>
                <Row>
                    <Col xs={8} md={10}>
                        <b>Liens Utiles</b>
                        <br/>
                        <br/>
                        <a href="https://docs.google.com/document/d/1NyEL4i-E5GBue69W9goH20Cqo8rpIaQ1OcsnKFimkZc/edit" target="blank"h6>Formulaire</a><br/>
                        <a href="https://docs.google.com/document/d/1NyEL4i-E5GBue69W9goH20Cqo8rpIaQ1OcsnKFimkZc/edit" target="blank"h6>Planifier un Don</a>
                        <a href="https://docs.google.com/document/d/1NyEL4i-E5GBue69W9goH20Cqo8rpIaQ1OcsnKFimkZc/edit" target="blank"h6>Passer le test d'eligibilite</a>
                    </Col>
    
                </Row>
            </Container>
        </div>
    );    
}

export default ContactComponent;