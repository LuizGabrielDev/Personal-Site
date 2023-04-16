import React from "react";
import luizAvatar from "../../assets/luiz.jpg";

import "./Cabecalho.css";

function Cabecalho() {
    return (
        <header>
            <img src={luizAvatar} alt="Avatar de Luiz" />
            <h1>Luiz Gabriel Bezerra de Lima</h1>
            <h3>Graduando em Ciência da Computação</h3>
        </header>
    );
}

export default Cabecalho;
