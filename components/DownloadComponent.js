import React from "react";
import { Container, Image } from "react-bootstrap";

function DownloadComponent() {
    return (
        <div className="download-container-bg">
            <Container className="download-container">
                <h3>Sauvez des Vies</h3>
                <h3>Télécharger l&apos;application</h3>
                <p align="justify">
                    Alerte Rouge est une application faite pour vous. Notre équipe travaille constamment pour vous fournir une application qui vous permet de sauver des vies.
                    N&apos;hésitez pas à nous contacter pour plus d&apos;informations.
                    L&apos;équipe Alerte Rouge est composée de passionnés de la santé qui souhaitent apporter de l&apos;aide à des personnes en difficulté.
                </p>
            </Container>
            <Container className="img-download">
                <a href="http://onelink.to/53ex9t" target="_blank" rel="noreferrer"><Image className="img-fluid" src="/assets/playstore.png" alt="Playstore Logo"/></a>
                <a href="http://onelink.to/53ex9t" target="_blank" rel="noreferrer"><Image className="img-fluid" src="/assets/appstore.png" alt="AppStore Logo"/></a>
            </Container>
        </div>
    );
}

export default DownloadComponent;