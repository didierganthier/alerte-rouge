import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";

function ServiceComponent() {
  return (
    <div className="service-container-bg">
        <Container className="service-container">
            <Row>
                <Col xs={12} md={4}>
                    <Image className="img-fluid service-img"
                        src="/assets/img-one.png"
                        alt="Premier Service"
                    />
                    <h2>Faites un Don</h2>
                    <p align="justify"> Faites un don pour sauver la vie de quelqu&apos;un en difficulté. Prenez un rendez-vous pour une donation.
                        Il pourrait être un membre de votre famille ou un parfait inconnu.
                        Créez un profil de donneur sur Alerte Rouge et gagnez des badges en aidant les gens autour de vous.
                    </p>
                </Col>
                <Col xs={12} md={4}>
                    <Image className="img-fluid service-img"
                        src="/assets/img-two.png"
                        alt="Deuxieme Service"
                    />
                    <h2>Restez Informés</h2>
                    <p  align="justify"> Informez vous pour savoir qui peut donner du sang.
                        Passez le test d&apos;éligibilité pour savoir si oui ou non vous pouvez donner.
                        Prenez les recommendations pour être en mesure de faire un don.
                        Sauvez des Vies.

                    </p>
                </Col>
                <Col xs={12} md={4}>
                    <Image className="img-fluid service-img"
                        src="/assets/img-three.png"
                        alt="Troisieme Service"
                    />
                    <h2>Partagez une Requête</h2>
                    <p  align="justify"> Nous encourageons fortement le partage des requêtes sur l&apos;application.
                        Vous n&apos;êtes pas toujours en mesure de sauver quelqu&apos;un mais en partageant une requête,
                        vous pouvez aider quelqu&apos;un en difficulté.
                    </p>    
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default ServiceComponent;