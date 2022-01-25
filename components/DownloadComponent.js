import React from "react";
import { Container } from "react-bootstrap";

function DownloadComponent() {
    return (
        <div className="download-container-bg">
            <Container className="download-container">
                <h3>Sauvez des Vies</h3>
                <h3>Télécharger l'application</h3>
                <p>
                    Alerte Rouge est une application faite pour vous. Notre équipe travaille constamment pour vous fournir une application qui vous permet de sauver des vies.
                    N'hésitez pas à nous contacter pour plus d'informations.
                    L'équipe Alerte Rouge est composée de passionnés de la santé qui souhaitent apporter de l'aide à des personnes en difficulté.
                </p>
            </Container>
            <Container className="img-download">
                <a href="http://onelink.to/53ex9t" target="_blank"><img className="img-fluid" src="/assets/playstore.png"/></a>
                <a href="http://onelink.to/53ex9t" target="_blank"><img className="img-fluid" src="/assets/appstore.png"/></a>
            </Container>
        </div>
    );
}

export default DownloadComponent;