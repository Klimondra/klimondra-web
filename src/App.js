import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Navbar from "./components/global/Navbar";
import Footer from "./components/global/footer";
import Kontakt from "./pages/Kontakt";
import Projekty from "./pages/Projekty";
import ProjectPage from "./pages/ProjectPage";

const App = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                { /*** DOMOVSKÁ STRÁNKA ***/}
                <Route path="/" element={ <Home /> } />
                <Route path="/home" element={ <Home /> } />

                { /*** KONTAKT ***/}
                <Route path="/kontakt" element={ <Kontakt /> } />
                <Route path="/contact" element={ <Kontakt /> } />

                { /*** VŠECHNY PROJEKTY ***/}
                <Route path="/projekty" element={ <Projekty /> } />
                <Route path="/projects" element={ <Projekty /> } />

                { /*** JEDEN PROJEKT ***/}
                <Route path="/projekty/:projectName" element={ <ProjectPage /> } />
                <Route path="/projects/:projectName" element={ <ProjectPage /> } />
                <Route path="/projekt/:projectName" element={ <ProjectPage /> } />
                <Route path="/project/:projectName" element={ <ProjectPage /> } />


                { /*** ***/}
                <Route path="*" element={ <NotFound /> } />
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
};

export default App;