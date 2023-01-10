import React from 'react';
import './App.css';
import Listenf from "./componentes/catalogos/enfermedades/Listar-enfermedades";
import Insert from "./componentes/catalogos/enfermedades/Insertar-enfermedades";
import Editenf from "./componentes/catalogos/enfermedades/Editar-enfermedades";
import { Routes, Route } from "react-router-dom";





function App() {
  return (     
         <div className="container">            
              <nav className="navbar navbar-expand navbar-light bg-light">
                  <div className="nav navbar-nav">
                      <a className="nav-item nav-link active" href="/">Sistema</a>
                      <a className="nav-item nav-link" href="/">Inicio</a>
                      <a className="nav-item nav-link" href="/listarenf">Enfermedades</a>
                  </div>
              </nav>
              <br></br>                  
              <Routes>  
                  <Route path="/listarenf" element={<Listenf />} />
                  <Route path="/insertenf" element={<Insert />} />
                  <Route path="/editenf/:id" element={<Editenf />} />
            </Routes> 
          </div>   
       );
}
export default App;
