import React, {Component} from "react";
import PropTypes from "prop-types";

 class Circuit extends Component {
    constructor(props){
        super(props);
    }
   
      
    render(){
        return(
            <div>
            <div className="circuitName text-center"><h2>{this.props.circuit.circuitName}</h2></div>
            <div className="row">
            <img className="imagenCircuito col-md-6" src={this.props.circuit.image} width="300"/>
            <div className="circuitPlace col-md-6 text-left">
             <p>{this.props.circuit.country} </p>
             <p>{this.props.circuit.locality}</p>
             <p>{this.props.circuit.numberLaps}    <img class="date-picker" src="https://d30y9cdsu7xlg0.cloudfront.net/png/27291-200.png" height="50" width="50"/></p>
             </div>  
            </div>   
           </div>
        );
    }
}
Circuit.PropTypes = {
    circuit : PropTypes.object.isRequired
}

export default Circuit;