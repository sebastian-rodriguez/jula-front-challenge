import React, { useState } from "react";
import { 
    SubscriptionCardWrapper,
    PeriodContainer,
    PeriodityCount,
    PeriodityType,
    Description,
    BuyButton
 } from "./styled";

const SubscriptionCard = ({count, type, description}) => {
    return(
        <SubscriptionCardWrapper>
            <PeriodContainer>
                <PeriodityCount>{ count }</PeriodityCount>
                <PeriodityType>{ type }</PeriodityType>
            </PeriodContainer>
            <Description>{ description }</Description>
            <BuyButton>COMPRAR PLAN</BuyButton>
        </SubscriptionCardWrapper>
    );
}

export default SubscriptionCard;