import React from "react";
import { Link } from "react-router-dom";

class Insertarenfermedades extends React.Component {
    constructor(props) {
        super(props);
    }
    state = { 
        txtnombreenf:"",
        txtdescripenf:""
     }

    enviarDatos = (e) =>{
          e.preventDefault();
          console.log("Enviando datos");
    }

    render() { 

        const {txtnombreenf, txtdescripenf}=this.state;

        return ( 
             <div className="card">
                <div className="card-header">
                    Agregar Enfermedades
                </div>
                <div className="card-body">
                    <form onSubmit={this.enviarDatos}>
                        <div className="form-group">
                            <table>     
                                <tr>            
                                  <td>Nombre de la enfermedad:</td>
                                  <td colSpan="3"><input type="text" value={txtnombreenf} name="txtnombreenf" id="txtnombreenf" className="form-control" placeholder="Escribe el nombre de la enfermedad" aria-describedby="helpId" size={50} ></input></td>
                               </tr> 
                                <tr>            
                                   <td>Descripción:</td>
                                   <td colSpan="3"><input type="text" value={txtdescripenf} name="txtdescripenf" id="txtdescripenf" className="form-control" placeholder="Escribe la descripción de la enfermedad" aria-describedby="helpId" size={65} ></input></td>
                                </tr>   
                                <tr>
                                 <div className="input-group">
                                    <span className="input-group-btn">
                                        <button className="btn btn-success" type="submit" aria-label="">Guardar</button>
                                        <Link to={"/listarenf"} className="btn btn-danger" type="button" aria-label="">Cancelar</Link>
                                   </span>                                    
                                 </div> 
                                </tr>                                
                            </table>        
                        </div>                       
                    </form>                              
                </div>
                
             </div>


         );
    }
}
 
export default Insertarenfermedades;