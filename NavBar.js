import React from "react";
import {NavLink} from 'react-router-dom';

const NavBar = () => {
    return(
        <div>
            <nav>
                <NavLink to="/portada">Portada</NavLink>
                <NavLink to = "/contenido">Contenido</NavLink>
                <NavLink to="/acerca">Acerca de mi</NavLink>
            </nav>
           
        </div>
    );
}

export default NavBar;