import React from "react";
import {
    CardWrapper,
    CardTitle,
    DescriptionText,
    CardBody
} from "./styled";

const Card = (props, {title, description}) => {
    return (
        <CardWrapper>
            <CardTitle>{ props.title }</CardTitle>
            <DescriptionText>{ props.description }</DescriptionText>
            <CardBody>{ props.children }</CardBody>
        </CardWrapper>
    );
}

export default Card;