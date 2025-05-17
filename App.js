import React from "react";
import { Route, Routes} from 'react-router-dom';
import NavBar from "./componentes/NavBar";
import Portada from "./componentes/Portada";
import Contenido from "./componentes/Contenido";
import Acerca from "./componentes/Acerca";

const App = () => {
  return(
    <div id="Contenedor">
      <h1 id="Titulo">Actividad 1: Trabajando con CSS </h1>
      <nav id="Menu">
        <NavBar />
      </nav>
      <main id="Main">
                <Routes>
                    <Route path = "/portada" element ={<Portada/>}/>
                    <Route path="/contenido" element = {<Contenido/>}/>
                    <Route path = "/acerca" element = {<Acerca/>}/>
                </Routes>
            </main>
    </div>
  );
}

export default App;