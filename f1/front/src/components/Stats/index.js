import React, {Component} from "react";

class Stats extends  Component {
    constructor(props)
    {
        super(props);
        this.state = {
            stats:[
                { _id: "59bb3c8762665e15ec8e9d28",
                    position: '1',
                    positionText: '1',
                    points: '238',
                    wins: '6',
                    driverId: 'hamilton',
                    permanentNumber: '44',
                    code: 'HAM',
                    url: 'http://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One',
                    givenName: 'Lewis',
                    familyName: 'Hamilton',
                    dateOfBirth: '1985-01-07',
                    nationality: 'German',
                    constructorId: 'mercedes',
                    name: 'Mercedes',
                    car: 'https://www.formula1.com/content/fom-website/en/championship/teams/Mercedes/_jcr_content/teamCar.img.jpg' },
                { _id: "59bb3c8762665e15ec8e9d29",
                    position: '2',
                    positionText: '2',
                    points: '235',
                    wins: '4',
                    driverId: 'vettel',
                    permanentNumber: '5',
                    code: 'VET',
                    url: 'http://en.wikipedia.org/wiki/Scuderia_Ferrari',
                    givenName: 'Sebastian',
                    familyName: 'Vettel',
                    dateOfBirth: '1987-07-03',
                    nationality: 'Italian',
                    constructorId: 'ferrari',
                    name: 'Ferrari',
                    car: 'https://www.formula1.com/content/fom-website/en/championship/teams/Ferrari/_jcr_content/teamCar.img.jpg' },
                { _id: "59bb3c8762665e15ec8e9d2a",
                    position: '3',
                    positionText: '3',
                    points: '197',
                    wins: '2',
                    driverId: 'bottas',
                    permanentNumber: '77',
                    code: 'BOT',
                    url: 'http://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One',
                    givenName: 'Valtteri',
                    familyName: 'Bottas',
                    dateOfBirth: '1989-08-28',
                    nationality: 'German',
                    constructorId: 'mercedes',
                    name: 'Mercedes',
                    car: 'https://www.formula1.com/content/fom-website/en/championship/teams/Mercedes/_jcr_content/teamCar.img.jpg' }


            ]
        };
    }
    renderStats()
    {
        return this.state.stats.map((t)=> {
            return(
                <tr>
                    <td>   {t.position}  </td>
                    <td>   {t.givenName} {t.familyName}   </td>
                    <td>   {t.name}   </td>
                    <td><img className="car" src={t.car} alt=""/></td>
                    <td>   {t.wins}   </td>
                    <td>   {t.points}   </td>
                </tr>)



        });
    }

    render(){
        return(
            <div className="Stats">
                <br/>
                <h1>Stats Season 2017</h1>
                <br/>
                <br/>
                <div>

                    <table class="table table-striped statsTable" >
                        <thead>
                        <tr>
                            <th>Position</th>
                            <th>Driver</th>
                            <th>Team</th>
                            <th>Vehicle</th>
                            <th>Wins</th>
                            <th>Points</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.renderStats()}
                        </tbody>
                    </table>

                </div>
            </div>
        )
    }
}


export default Stats;