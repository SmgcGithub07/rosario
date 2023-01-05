import React from 'react';
import { Link } from "react-router-dom";


class Listenf extends React.Component {
    constructor(props) {
        super(props);
    }
    state = { datosCargados:false }

    cargarEnfermedades(){
        fetch("http://localhost/API/Catalogos/Enfermedades/SP_Ver_Todas_enfermedades_lista.php")
        .then(respuesta=>respuesta.json())
        .then((datosRespuesta)=>{
                  console.log(datosRespuesta);
                  this.setState({datosCargados:true, enfermedades:datosRespuesta})
         }
        )
        .catch(console.log)
}

componentDidMount(){
  this.cargarEnfermedades();
}
    render() { 
        const{datosCargados, enfermedades}=this.state
        
         if(!datosCargados){
            return (<div>Cargando...</div>);
         }
         else{
            return ( 
<div className="card">
    <div className="card-header">
                    <Link className="btn btn-success" to={"/insertenf"}  >Agregar enfermedad</Link>
                    </div>
                    <div className="card-body">
                        <h4>Lista de Enfermedades</h4>
                    <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre de la enfermedad</th>
                    <th>Descripción</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {enfermedades.map(
                       (enfermedades)=>(
                         <tr key={enfermedades.Id_enfermedad} >
                            <td>{enfermedades.Id_enfermedad}</td>
                            <td>{enfermedades.Nombre_enf}</td>
                            <td>{enfermedades.Descrip}</td>
                          <td>
                           <div className="btn-group" role="group" aria-label="">                              
                               <Link className="btn btn-warning" to={"/editenf"} >Editar</Link>
                            </div>
                          </td>
                         </tr>
                        )   
                    )
                }                             
               </tbody>
           </table>
       </div>                     
  </div>
         );
    }
 } 
}
export default Listenf;