import styled from "styled-components";
import eyeIcon from "../../icons/eye-slash-solid.svg";

export const ContainerWrapper = styled.div`
    width: 100%;
    min-height: 50vh;
    margin-top: 4.8rem;
    display: flex;
`;

export const MenuContainer = styled.div`
    width: 35%;
    min-height: 50vh;
`;

export const MenuButton = styled.button`
    width: 21.8rem;
    height: 2.4rem;
    color: #844797;
    font-family: YaroCutBold;
    font-size: 1.2rem;
    text-align: start;
    cursor: pointer;
    margin-bottom: 1rem;
    background-color: #FFFFFF;
    border: 0px;
    box-shadow: 0px 3px 6px #00000029;
    padding-left: 1.5rem;
`;

export const CardsContainer = styled.div`
    width: 100%;
    min-height: 50vh;
    padding-left: 4rem;
`;

export const SubcriptionCardsContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 1rem;
`;

export const PersonalDataContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: auto auto;
    gap: 1rem;
    margin-bottom: 2rem;
`
export const Input = styled.input`
    width:  ${({ size }) => ( size === "small" ? "4.2rem" : "18.7rem")};
    height: 2.6rem;
    border: 1px solid #E5E5E5;
    border-radius: 0.2rem;
    padding: 0rem 1rem 0rem 1rem;

    ${({ icon }) => ( icon === "eye" ? `
        background: url(${eyeIcon}) no-repeat right;
        background-position: 95% 50%;
        background-size: 1.2rem;
    ` : "")};
    
`

export const BirthDateTitle = styled.p`
    color: #A5A2A2;
    font-size: 0.8rem;
    font-family: MarcherRegular;
`

export const BirthDateContainer = styled.div`
    max-width: 20.7rem;
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
`

export const SubmitButtonContainer = styled.div`
    width: 100%;
    margin-top: 4rem;
    margin-bottom: 2rem;
    display: flex;
    justify-content: end;
`

export const SubmitButton = styled.button`
    min-width: 9.7rem;
    height: 2.9rem;
    background-color: #18A48C;
    border-radius: 1.3rem;
    border: transparent;
    color: #FFFFFF;
    font-family: YaroCutBold;
    font-size: 0.9rem;
    cursor: pointer;
    padding: 0 1rem 0 1rem;
`

export const PasswordRecoveryContainer = styled.div`
    max-width: 20.7rem;
`

export const Label = styled.p`
    color: #2B2B2B;
    font-size: 0.8rem;
    font-family: MarcherRegular;
    margin-bottom: 1rem;
`


