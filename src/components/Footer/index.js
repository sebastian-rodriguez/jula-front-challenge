import React from "react";
import { FooterContainer, FooterContentWrapper, FooterLogo, FooterContent, FooterContentSeparator } from './styled';

const Footer = () => {
    return(
        <FooterContainer>
            <FooterContentWrapper>
                <FooterLogo>
                    <img src="judit-logo-white.png" width={"100%"}/>
                </FooterLogo>
                <FooterContent>
                    <span>Términos y Condiciones | Términos de Cancelación</span>
                    <FooterContentSeparator />
                    <span>©️ 2021, judIT. Todos los derechos reservados</span>
                </FooterContent>
            </FooterContentWrapper>
        </FooterContainer>
    )
}

export default Footer;