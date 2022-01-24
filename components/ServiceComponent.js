import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function ServiceComponent() {
  return (
    <div className="service-container-bg">
        <Container className="service-container">
            <Row>
                <Col xs={12} md={4}>
                    <img className="img-fluid service-img"
                        src="/assets/img-one.png"
                    />
                    <h2>Faites un Don</h2>
                    <p> Faites un don pour sauver la vie de quelqu'un en difficulté.
                        Prenez un rendez-vous pour une donation.
                        Il pourrait être un membre de votre famille ou un parfait inconnu.
                        Créez un profil de donneur sur Alerte Rouge et gagnez des badges en aidant les gens autour de vous.
                    </p>
                </Col>
                <Col xs={12} md={4}>
                    <img className="img-fluid service-img"
                        src="/assets/img-two.png"
                    />
                    <h2>Restez Informés</h2>
                    <p> Informez vous pour savoir qui peut donner du sang.
                        Passez le test d'éligibilité pour savoir si oui ou non vous pouvez donner.
                        Prenez les recommendations pour être en mesure de faire un don.
                        Sauvez des Vies.

                    </p>
                </Col>
                <Col xs={12} md={4}>
                    <img className="img-fluid service-img"
                        src="/assets/img-three.png"
                    />
                    <h2>Partagez une Requête</h2>
                    <p> Nous encourageons fortement le partage des requêtes sur l'application.
                        Vous n'êtes pas toujours en mesure de sauver quelqu'un mais en partageant une requête,
                        vous pouvez aider quelqu'un en difficulté.
                    </p>    
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default ServiceComponent;