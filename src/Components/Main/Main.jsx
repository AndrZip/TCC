import React from "react";
import './Main.css'

import Btn from '../Button/Btn'

const Main = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col coluna1">
                        <h1 className="display-3">Conectando corações, transformando vidas</h1>
                        <p className="lead">Unidos em um propósito: promover a adoção responsável e espalhar o amor incondicional pelos animais.</p>
                        <Btn type="primary" size="lg" text="Quero adotar" />
                        <Btn type="secondary" size="lg" text="Quero doar" />
                        <img src="https://portal.cnpae.embrapa.br/vitrine/wp-content/uploads/sites/3/2021/10/topo_torta_pinhao.jpg" className="img-fluid rounded" alt="parceria" />
                    </div>
                    <div className="col coluna2">
                        <img src="https://alconpet.com.br/common/img/produto/produto_lg/alcon-basic.webp" className="img-fluid rounded" alt="banner" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main;
