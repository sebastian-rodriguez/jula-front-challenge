import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderWrapper = styled.div`
    width: 100%;
    height: 15rem;
`
export const NavContainer = styled.div`
    width: 100%;
    height: 11rem;
    background-color: #F7F7F7;
`

export const NavContainerWrapper = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
`

export const LogoContainer = styled.div`
    width: 10.2rem;
    height: 6.1rem;
`
export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const NavLink = styled(Link)`
    color: ${({ active }) => ( active ? "#18A48C" : "#844797")};
    font-size:  ${({ size }) => ( size === "small" ? "0.9rem" : size === "extra-small" ? "0.77rem" : "1.2rem")};
    font-family: ${({ type }) => ( type === "menu-item" ? "MarcherRegular" : "YaroCutBold")};
    text-decoration: none;
    margin-right: 1.6rem;

    ${({ type }) => ( type === "menu-item" ? `
        &:hover{
            color: #B897C4;
        }
    ` : ``)};
`

export const SearchContainer = styled.div`
    width: 100%;
    height: 4rem;
    background-color: #18A48C;
`

export const SearchContentWrapper = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
`

export const Message = styled.span`
    color: #FFFFFF;
    font-size: 1.4rem;
    font-family: EncondeSansRegular;
`

export const UserAvatarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`

export const UserAvatar = styled.div`
    width: 2.1rem;
    height: 2.1rem;
    cursor: pointer;
    background-color: #18A48C;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
`

export const UserMenu = styled.div`
    width: 9.9rem;
    min-height: 6rem;
    background-color: #F4F0EC;
    z-index: 100;
    position: absolute;
    top: 2.3rem;
    right: 0.5rem;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 0.5rem;
`

export const MenuLinkContainer = styled.div`
    border-bottom: ${({ last }) => ( last ? "0px" : "1px solid #542F61")};
    text-align: start;
    padding: 0.5rem;
`