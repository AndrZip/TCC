import React from "react";
import './body.css'

const Body = () => {
    return (
        <>
            <div className="container">
                <div className="col-md">
                    <div className="row">
                        <h1>Conectando corações, transformando vidas</h1>
                        <p>Unidos em um propósito: promover a adoção responsável e espalhar o amor incondicional pelos animais.</p>
                    </div>
                    <div className="row">
                        <img src="https://i.stack.imgur.com/hRup4.jpg?s=256&g=1" className="img-fluid" alt="imagem sla" />
                    </div>
                </div>
                <div className="col-md">
                    <div className="row">
                        <img src="https://i.stack.imgur.com/hRup4.jpg?s=256&g=1" className="img-fluid" alt="imagem sla 2" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Body