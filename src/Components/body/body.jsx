import React from "react";
import './body.css'

import Btn from '../Button/Btn'

const Body = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <h1>Conectando corações, transformando vidas</h1>
                        <p>Unidos em um propósito: promover a adoção responsável e espalhar o amor incondicional pelos animais.</p>
                        <Btn type="primary" size="lg" text="Quero adotar" />
                        <Btn type="secondary" size="lg" text="Quero doar" />
                    </div>
                    <div className="col">
                        <img src="https://i.stack.imgur.com/hRup4.jpg?s=256&g=1" className="img-fluid" alt="imagem sla" id="body-img-1" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Body

/*utlizar classes de margin e padding do bootstrap*/