import React, {Component} from "react";

import TeamsList from "./TeamsList.js";

class Teams extends  Component{
    
    constructor(props){
        super(props);
            this.state={
                teams:[ {
               "constructorId":"ferrari",
               "url":"http:\/\/en.wikipedia.org\/wiki\/Scuderia_Ferrari",
               "name":"Ferrari",
               "nationality":"Italian",
               "piloto1":"Sebastian Vettel",
               "piloto2":"Kimi Räikkönen",
               "imagen_escuderia":"https://www.formula1.com/content/fom-website/en/championship/teams/Ferrari/_jcr_content/logo.img.jpg/1496921233645.jpg",
               "numero_titulos":16,
               "numero_podios":733,
               "imagen_carro":"https://www.formula1.com/content/fom-website/en/championship/teams/Ferrari/_jcr_content/image16x9.img.1024.medium.jpg/1488799811381.jpg"
            },
            {
               "constructorId":"force_india",
               "url":"http:\/\/en.wikipedia.org\/wiki\/Force_India",
               "name":"Force India",
               "nationality":"Indian",
               "piloto1":"Sergio Perez",
               "piloto2":"Esteban Ocon",
               "imagen_escuderia":"https://www.formula1.com/content/fom-website/en/championship/teams/Force-India/_jcr_content/logo.img.jpg/1496922228622.jpg",
               "numero_titulos":0,
               "numero_podios":5,
               "imagen_carro":"https://www.formula1.com/content/fom-website/en/championship/teams/Force-India/_jcr_content/image16x9.img.1024.medium.jpg/1491304849567.jpg"
            },
            {
               "constructorId":"haas",
               "url":"http:\/\/en.wikipedia.org\/wiki\/Haas_F1_Team",
               "name":"Haas F1 Team",
               "nationality":"American",
               "piloto1":"Romain Grosjean",
               "piloto2":"Kevin Magnussen",
               "imagen_escuderia":"https://www.formula1.com/content/fom-website/en/championship/teams/Haas/_jcr_content/logo.img.jpg/1496929177324.jpg",
               "numero_titulos":0,
               "numero_podios":0,
               "imagen_carro":"https://www.formula1.com/content/fom-website/en/championship/teams/Haas/_jcr_content/image16x9.img.1024.medium.jpg/1496919831570.jpg"
            },
            {
               "constructorId":"mclaren",
               "url":"http:\/\/en.wikipedia.org\/wiki\/McLaren",
               "name":"McLaren",
               "nationality":"British",
               "piloto1":"Fernando Alonso",
               "piloto2":"Stoffel Vandoorne",
               "imagen_escuderia":"https://www.formula1.com/content/fom-website/en/championship/teams/McLaren/_jcr_content/logo.img.jpg/1496929840866.jpg",
               "numero_titulos":8,
               "numero_podios":485,
               "imagen_carro":"https://www.formula1.com/content/fom-website/en/championship/teams/McLaren/_jcr_content/image16x9.img.1024.medium.jpg/1488799995015.jpg"
            },
            {
               "constructorId":"mercedes",
               "url":"http:\/\/en.wikipedia.org\/wiki\/Mercedes-Benz_in_Formula_One",
               "name":"Mercedes",
               "nationality":"German",
               "piloto1":"Lewis Hamilton",
               "piloto2":"Valtteri Botas",
               "imagen_escuderia":"https://www.formula1.com/content/fom-website/en/championship/teams/Mercedes/_jcr_content/logo.img.jpg/1486740329957.jpg",
               "numero_titulos":3,
               "numero_podios":128,
               "imagen_carro":"https://www.formula1.com/content/fom-website/en/championship/teams/Mercedes/_jcr_content/image16x9.img.1024.medium.jpg/1490512766389.jpg"
            },
            {
               "constructorId":"red_bull",
               "url":"http:\/\/en.wikipedia.org\/wiki\/Red_Bull_Racing",
               "name":"Red Bull",
               "nationality":"Austrian",
               "piloto1":"Daniel Ricciardo",
               "piloto2":"Max Verstappen",
               "imagen_escuderia":"https://www.formula1.com/content/fom-website/en/championship/teams/Red-Bull/_jcr_content/logo.img.jpg/1452521397708.jpg",
               "numero_titulos":4,
               "numero_podios":142,
               "imagen_carro":"https://www.formula1.com/content/fom-website/en/championship/teams/Red-Bull/_jcr_content/image16x9.img.1024.medium.jpg/1488800246878.jpg"
            },
            {
               "constructorId":"renault",
               "url":"http:\/\/en.wikipedia.org\/wiki\/Renault_F1",
               "name":"Renault",
               "nationality":"French",
               "piloto1":"Nico Hulkenberg",
               "piloto2":"Jolyon Palmer",
               "imagen_escuderia":"https://www.formula1.com/content/fom-website/en/championship/teams/Renault/_jcr_content/logo.img.png/1454577679998.png",
               "numero_titulos":2,
               "numero_podios":59,
               "imagen_carro":"https://www.formula1.com/content/fom-website/en/championship/teams/Renault/_jcr_content/image16x9.img.1024.medium.jpg/1488800128109.jpg"
            },
            {
               "constructorId":"sauber",
               "url":"http:\/\/en.wikipedia.org\/wiki\/Sauber",
               "name":"Sauber",
               "nationality":"Swiss",
               "piloto1":"Marcus Ericsson",
               "piloto2":"Pascal Wehrlein",
               "imagen_escuderia":"https://www.formula1.com/content/fom-website/en/championship/teams/Sauber/_jcr_content/logo.img.jpg/1496929341329.jpg",
               "numero_titulos":0,
               "numero_podios":27,
               "imagen_carro":"https://www.formula1.com/content/fom-website/en/championship/teams/Sauber/_jcr_content/image16x9.img.1024.medium.jpg/1488800156459.jpg"
            },
            {
               "constructorId":"toro_rosso",
               "url":"http:\/\/en.wikipedia.org\/wiki\/Scuderia_Toro_Rosso",
               "name":"Toro Rosso",
               "nationality":"Italian",
               "piloto1":"Daniil Kvyat",
               "piloto2":"Carlos Sainz",
               "imagen_escuderia":"https://www.formula1.com/content/fom-website/en/championship/teams/Toro-Rosso/_jcr_content/logo.img.jpg/1496922566175.jpg",
               "numero_titulos":0,
               "numero_podios":1,
               "imagen_carro":"https://www.formula1.com/content/fom-website/en/championship/teams/Toro-Rosso/_jcr_content/image16x9.img.1024.medium.jpg/1488800044634.jpg"
            },
            {
               "constructorId":"williams",
               "url":"http:\/\/en.wikipedia.org\/wiki\/Williams_Grand_Prix_Engineering",
               "name":"Williams",
               "nationality":"British",
               "piloto1":"Felipe Massa",
               "piloto2":"Lance Stroll",
               "imagen_escuderia":"https://www.formula1.com/content/fom-website/en/championship/teams/Williams/_jcr_content/logo.img.jpg/1496922932332.jpg",
               "numero_titulos":9,
               "numero_podios":310,
               "imagen_carro":"https://www.formula1.com/content/fom-website/en/championship/teams/Williams/_jcr_content/image16x9.img.1024.medium.jpg/1489751169617.jpg"
            }]
            };
         }
        //   ComponentDidMount(){
        //       fetch("/teams2017", {method: "GET", headers:{accept:"application/json"}})
        //      .then((res)=> {
        //          console.log("rest en index");
        //           if(res.ok)
        //              return res.json();
        //          })
        //           .then((teams) =>{
        //               this.setState({
        //                   teams : teams
        //              })
        //         })
        //   }
    render(){
        return(
            <div className="Teams">
            <h1>TEAMS</h1>
                <TeamsList teams={this.state.teams}/>
            </div>
        );
    }
}

export default Teams;