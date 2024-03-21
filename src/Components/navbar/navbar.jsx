import React from 'react'
import './navbar.css'

import Btn from '../Button/Btn'

const navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-Main-tertiary" id='navbar'>
            <div className="container-fluid">
                <a className="navbar-brand" href="/#">[logo]</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link" href="/#">Quero adotar</a>
                        <a className="nav-link" href="/#">Quero doar</a>
                        <a className="nav-link" href="/#">Parceiros</a>
                        <a className="nav-link" href="/#">Quem somos</a>
                    </div>
                </div>

                <div className="d-flex justify-content-end">
                    <Btn type="secondary" size="sm" text="Login" />
                    <Btn type="primary" size="sm" text="Cadastro" />
                </div>
            </div>
        </nav>
    )
}

export default navbar