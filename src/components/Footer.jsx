import Marcas from './Banner';
import React from 'react';
import './Footer.css';
import Logo from './Logo';


export const Footer = () => {
    return (
        <>
            <div className="Footer">
                <Logo />
                <h6 className='copy'>  © Copyright 2023 GAMING STORE - Todos los derechos reservados</h6>
                
            </div>
            <div>
                <Marcas />
            </div>
        </>
        
    )
}
export default Footer;