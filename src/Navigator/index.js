import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";

import Layout from "../components/Layout";

//pages
import User from "../pages/User";
import Analytic from "../pages/Analytic";
import Case from "../pages/Case";
import Dependence from "../pages/Dependence";
import Magistrate from "../pages/Magistrate";

const Navigator = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='' element={<Layout />}>
                    <Route path='/' element={<User />} />
                    <Route path='/analytics' element={<Analytic />} />
                    <Route path='/cases' element={<Case />} />
                    <Route path='/dependences' element={<Dependence />} />
                    <Route path='/magistrate' element={<Magistrate />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Navigator;