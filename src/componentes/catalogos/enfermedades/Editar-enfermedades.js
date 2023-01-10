import React from "react";
import { Link } from "react-router-dom";



class Editarenfermedades extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {  }

    componentDidMount(){
       //console.log(this.props.match.params.id);
      }


    render() { 
        return ( 
            <div className="card">
            <div className="card-header">
                Editar Enfermedades
            </div>
            <div className="card-body">
                <form onSubmit={this.enviarDatos} id="webFrmInsertarEnf">  
                           <div className="form-group">
                                 <label htmlFor="">ID de la enfermedad:</label>
                                 <input type="text"    name="txtIdenf" id="txtIdenf" className="form-control" aria-describedby="helpId" size={10}  placeholder="Teclea el ID de la enfermedad" readOnly ></input>
                                 
                            </div>                    
                            <div className="form-group">
                                 <label htmlFor="">Nombre de la enfermedad:</label>
                                 <input type="text"    name="txtnombreenf" id="txtnombreenf" className="form-control" aria-describedby="helpId" size={50}  placeholder="Teclea el nombre de la enfermedad" required ></input>
                                 
                            </div>
                             
                            <div className="form-group">
                                 <label htmlFor="">Descripción de la enfermedad:</label>
                                 <input type="text"   name="txtdescripenf" id="txtdescripenf" className="form-control" aria-describedby="helpId" size={50}  placeholder="Teclea Descripción de la enfermedad" ></input>
                                 
                            </div>
                      
                            <div className="input-group">
                                <span className="input-group-btn">                                        
                                    <button className="btn btn-success" type="submit" aria-label="">Guardar</button>
                                    <Link to={"/listarenf"} className="btn btn-danger" type="button" aria-label="">Cancelar</Link>
                                    <Link to={"/listarenf"} className="btn btn-warning" type="button" aria-label="" id="btnsalir" >Regresar al Listado</Link>
                               </span>                                    
                             </div>                              
                </form>                             
            </div>                
         </div>
         );
    }
}
 
export default Editarenfermedades;