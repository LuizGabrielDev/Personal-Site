import React, { useState } from "react";

import "./App.css";

import Cabecalho from "./components/Cabecalho/Cabecalho";
import Nav from "./components/Nav/Nav";
import Rodape from "./components/Rodape/Rodape";

import Curriculo from "./components/Curriculo/Curriculo";
import Portfolio from "./components/Portfolio/Portfolio";
import Contato from "./components/Contato/Contato";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
    return (
        <>
            <Cabecalho></Cabecalho>

            <BrowserRouter>
                <Nav></Nav>

                <Routes>
                    <Route index element={<Curriculo />} />
                    <Route path="portfolio" element={<Portfolio />} />
                    <Route path="contato" element={<Contato />} />
                </Routes>
            </BrowserRouter>

            <Rodape></Rodape>
        </>
    );
}

export default App;
