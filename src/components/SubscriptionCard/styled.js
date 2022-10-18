import styled from "styled-components";


export const SubscriptionCardWrapper = styled.div`
    min-height: 12.7rem;
    background-color: #F7F7F7;
    padding: 1rem 1.5rem 1rem 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
`;

export const PeriodContainer = styled.div`
    width: 100%;
    border-bottom: 0.1rem solid #DBDADA;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const PeriodityCount = styled.span`
    font-family: EncondeSansBold;
    font-size: 3rem;
    color: #18A48C;
    text-align: center;
`;

export const PeriodityType = styled.span`
    font-family: EncondeSansRegular;
    font-size: 1.2rem;
    color: #18A48C;
    text-align: center;
    letter-spacing: 0.3rem;
`;

export const Description = styled.p`
    font-family: EncondeSansRegular;
    font-size: 0.8rem;
    color: #A8A8A8;
`;

export const BuyButton = styled.button`
    width: 10.5rem;
    height: 2.5rem;
    background-color: #FFFFFF;
    border: 0.1rem solid #542F61;
    border-radius: 1.8rem;
    color: #542F61;
    font-size: 0.9rem;
    font-family: YaroCutBold;
    margin-bottom: 1rem;
    cursor: pointer;

    &:hover{
        background-color: #542F61;
        color: #FFFFFF;
    }
`;