import React from "react";
import {LayoutWrapper, ContentWrapper} from "./styled";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

const Layout = (props) => {
    return (
        <LayoutWrapper>
            <Header>Header</Header>
            <ContentWrapper> 
                <Outlet />
            </ContentWrapper>
            <Footer />
        </LayoutWrapper>
    )
}

export default Layout;