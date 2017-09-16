//Dependencias
import React, { Component } from 'react';
import PropTypes from "prop-types";

//components
import Header from "./Global/Header";
import Content from "./Global/Content";
import FT from "./Global/Footer";


import '../App.css';

class App extends Component {
    static propTypes =
        {
            children: PropTypes.object.isRequired
        };

  render() {
      const {children} = this.props;
    return (
      <div className="App">
        <Header/>
          <Content body={children}/>
          <FT/>


      </div>
    );
  }
}

export default App;
