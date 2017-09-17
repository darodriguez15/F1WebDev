import React, {Component} from "react";
import PropTypes from "prop-types";

 class Team extends Component {
    constructor(props){
        super(props);
    }
   
      
    render(){
        return(
            <div>
            
            <div className="row">
            <div className="col-md-6">
            <img className="imagenETeam" src={this.props.team.imagen_escuderia}/>
            </div>
            <div className="col-md-6">
            <img className="imagenCarroTeam" src={this.props.team.imagen_carro}/>
            </div>
            </div>
            <div className="row">
            <div className="idTeam">{this.props.team.constructorId}</div>
            <div className="urlTeam">{this.props.team.url}</div>
            <div className="nombreTeam">{this.props.team.name}</div>
            <div className="nacionalidadTeam">{this.props.team.nationality}</div>
            <div className="piloto1Team">{this.props.team.piloto1}</div>
            <div className="piloto2Team">{this.props.team.piloto2}</div>
            <div className="numTitulosTeam">{this.props.team.numero_titulos}</div>
            <div className="numPodiosTeam">{this.props.team.numero_podios}</div>
            </div>   
            </div>
        );
    }
}
Team.PropTypes = {
    team : PropTypes.object.isRequired
}

export default Team;