import React from "react";
import { PageTitleWrapper, PageTitleContainer } from "./styled";

const PageTitle = ({ title }) => {
    return(
        <PageTitleWrapper>
            <PageTitleContainer>
                { title }
            </PageTitleContainer>
        </PageTitleWrapper>
    )
}

export default PageTitle;

