import React, {Component} from "react";

import CircuitsList from "./CircuitsList.js";

class Circuits extends  Component{
    
    constructor(props){
        super(props);
            this.state={
                circuits:[]
            };
         }
    componentDidMount(){
        fetch("/circuitInfo", {method: "GET", headers:{accept:"application/json"}})
            .then((res)=> {
                console.log("rest en index");
                if(res.ok)
                    return res.json();
            })
            .then((circuits) =>{
                this.setState({
                    circuits : circuits
                })
            })
    }

    render(){
        return(
            <div className="Circuits">
            <h1>Circuits Season 2017</h1>
                <br/>
                <CircuitsList circuits={this.state.circuits}/>
            </div>
        );
    }
}

export default Circuits;