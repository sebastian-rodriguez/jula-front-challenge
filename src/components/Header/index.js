import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { HeaderWrapper, 
    SearchContainer,
    NavContainer,
    NavContainerWrapper,
    LogoContainer,
    Nav,
    NavLink,
    SearchContentWrapper,
    UserAvatarWrapper,
    UserAvatar,
    Message,
    UserMenu,
    MenuLinkContainer
} from "./styled";

//icons
import { faUser } from '@fortawesome/free-solid-svg-icons';

import Search from "../Search";
import { useLocation } from "react-router-dom";

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const localtion = useLocation();
    const url = localtion.pathname;
    
    const handleAvatarClick = () => {
        setShowMenu(!showMenu);
    }

    const getMessage = () => {
        
        switch (url) {
            case '/':
                return "Te quedan 22 días de tu subscripción gratuita.";
                break;
            case '/analytics':
                return "Analíticas de CASO"
                break;
            case '/cases':
                return "CASO"
                break;
            case '/dependences':
                return "DEPENDENCIA"
                break;
            case '/magistrate':
                return "MAGISTRADO"
                break;
            default:
                return "";
                break;
        }

    }

    return(
        <HeaderWrapper>
            <NavContainer>
                <NavContainerWrapper>
                    <LogoContainer>
                        <img src="judi-logo.png" width={"100%"}/>
                    </LogoContainer>
                    <Nav>
                        <NavLink to="/analytics" active={url === "/analytics"}>ANALÍTICA</NavLink>
                        <NavLink to="/cases" active={url === "/cases"}>> CASO</NavLink>
                        <NavLink to="/dependences" active={url === "/dependences"}>> DEPENDENCIA</NavLink>
                        <NavLink to="/magistrate" active={url === "/magistrate"}>> MAGISTRADO</NavLink>
                        <UserAvatarWrapper>
                            <UserAvatar onClick={ () => handleAvatarClick() }>
                                <FontAwesomeIcon icon={faUser} />
                            </UserAvatar>
                            { 
                                showMenu && 
                                <UserMenu>
                                    <MenuLinkContainer>
                                        <NavLink to="/" size={"small"} type={"menu-item"} onClick={ () => handleAvatarClick() }>Mis Datos</NavLink>
                                    </MenuLinkContainer>
                                    <MenuLinkContainer>
                                        <NavLink to="/" size={"extra-small"} type={"menu-item"} onClick={ () => handleAvatarClick() }>Cambiar Contraseña</NavLink>
                                    </MenuLinkContainer>
                                    <MenuLinkContainer last={true}>
                                        <NavLink to="/" size={"small"} type={"menu-item"} onClick={ () => handleAvatarClick() }>Mi Subscripción</NavLink>
                                    </MenuLinkContainer>
                                </UserMenu>
                            }
                        </UserAvatarWrapper>
                    </Nav>
                </NavContainerWrapper>
            </NavContainer>
            <SearchContainer>
                <SearchContentWrapper>
                    <Message>{ getMessage() }</Message>
                    <Search />
                </SearchContentWrapper>
            </SearchContainer>
        </HeaderWrapper>
    )
}

export default Header;