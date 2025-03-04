import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Navbar from "./components/global/Navbar";
import Footer from "./components/global/footer";
import Kontakt from "./pages/Kontakt";

const App = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/home" element={ <Home /> } />
                <Route path="/kontakt" element={ <Kontakt /> } />
                <Route path="/contact" element={ <Kontakt /> } />
                <Route path="*" element={ <NotFound /> } />
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
};

export default App;