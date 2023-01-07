import React from "react";
import { Link  } from "react-router-dom";

 


class Insertarenfermedades extends React.Component {
    constructor(props) {
        super(props);
    }
    state = { 
        txtnombreenf:"",
        txtdescripenf:""
     }

     cambiodeValor=(e)=>{
        const state=this.state;
        state[e.target.name]=e.target.value;
        this.setState({state});
     }

    enviarDatos = (e) =>{
          e.preventDefault();
          console.log("Enviando datos");
          const {txtnombreenf, txtdescripenf}=this.state;
          console.log(txtnombreenf);
          console.log(txtdescripenf);
          

          try {   
                
                    var datosEnviar={Nombre_enf:txtnombreenf, Descrip:txtdescripenf}

                    fetch("http://localhost/API/Catalogos/Enfermedades/Sp_Insert_Enfermedades.php",{
                           method:"POST",
                           body:JSON.stringify(datosEnviar)
                    })
                    .then(respuesta=>respuesta.json())
                    .then((datosRespuesta)=>{                           
                          switch (datosRespuesta) {
                            case "No insertado, porque están nulos los datos":
                                alert(datosRespuesta);
                            break;

                            case "No insertado, porque ya existe":
                                alert(datosRespuesta);
                            break;                         
                            
                            case "Registro guardado":
                                
                                alert(datosRespuesta,  this.props.history.push("/listarenf")); 
                                this.props.history.push("/listarenf");                  
                            break;
                          }
                     }
                    )
                    .catch(console.log)
                 
          } catch (error) {
            alert(error);
          }
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
                                     <label htmlFor="">Nombre de la enfermedad:</label>
                                     <input type="text" onChange={this.cambiodeValor} value={txtnombreenf}  name="txtnombreenf" id="txtnombreenf" className="form-control" aria-describedby="helpId" size={50}  placeholder="Teclea el nombre de la enfermedad" ></input>
                                     
                                </div>
                                 
                                <div className="form-group">
                                     <label htmlFor="">Descripción de la enfermedad:</label>
                                     <input type="text" onChange={this.cambiodeValor} value={txtdescripenf} name="txtdescripenf" id="txtdescripenf" className="form-control" aria-describedby="helpId" size={50}  placeholder="Teclea Descripción de la enfermedad" ></input>
                                     
                                </div>
                          
                                <div className="input-group">
                                    <span className="input-group-btn">                                        
                                        <button className="btn btn-success" type="submit" aria-label="">Guardar</button>
                                        <Link to={"/listarenf"} className="btn btn-danger" type="button" aria-label="">Cancelar</Link>
                                        <Link to={"/listarenf"} className="btn btn-warning" type="button" aria-label="">Regresar al Listado</Link>
                                   </span>                                    
                                 </div> 
                              
                    </form>                             
                </div>
                
             </div>


         );
    }
}
 
export default Insertarenfermedades;