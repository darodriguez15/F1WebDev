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
                    car: 'https://www.formula1.com/content/fom-website/en/championship/teams/Mercedes/_jcr_content/teamCar.img.jpg' },
                { _id: "59bb3c8762665e15ec8e9d2b",
                    position: '4',
                    positionText: '4',
                    points: '144',
                    wins: '1',
                    driverId: 'ricciardo',
                    permanentNumber: '3',
                    code: 'RIC',
                    url: 'http://en.wikipedia.org/wiki/Red_Bull_Racing',
                    givenName: 'Daniel',
                    familyName: 'Ricciardo',
                    dateOfBirth: '1989-07-01',
                    nationality: 'Austrian',
                    constructorId: 'red_bull',
                    name: 'Red Bull',
                    car: 'https://www.formula1.com/content/fom-website/en/championship/teams/Red-Bull/_jcr_content/teamCar.img.jpg' },
                { _id: "59bb3c8762665e15ec8e9d2c",
                    position: '5',
                    positionText: '5',
                    points: '138',
                    wins: '0',
                    driverId: 'raikkonen',
                    permanentNumber: '7',
                    code: 'RAI',
                    url: 'http://en.wikipedia.org/wiki/Scuderia_Ferrari',
                    givenName: 'Kimi',
                    familyName: 'Räikkönen',
                    dateOfBirth: '1979-10-17',
                    nationality: 'Italian',
                    constructorId: 'ferrari',
                    name: 'Ferrari',
                    car: 'https://www.formula1.com/content/fom-website/en/championship/teams/Ferrari/_jcr_content/teamCar.img.jpg' },
                { _id: "59bb3c8762665e15ec8e9d2d",
                    position: '6',
                    positionText: '6',
                    points: '68',
                    wins: '0',
                    driverId: 'max_verstappen',
                    permanentNumber: '33',
                    code: 'VER',
                    url: 'http://en.wikipedia.org/wiki/Red_Bull_Racing',
                    givenName: 'Max',
                    familyName: 'Verstappen',
                    dateOfBirth: '1997-09-30',
                    nationality: 'Austrian',
                    constructorId: 'red_bull',
                    name: 'Red Bull',
                    car: 'https://www.formula1.com/content/fom-website/en/championship/teams/Red-Bull/_jcr_content/teamCar.img.jpg' },
                { _id: "59bb3c8762665e15ec8e9d2e",
                    position: '7',
                    positionText: '7',
                    points: '58',
                    wins: '0',
                    driverId: 'perez',
                    permanentNumber: '11',
                    code: 'PER',
                    url: 'http://en.wikipedia.org/wiki/Force_India',
                    givenName: 'Sergio',
                    familyName: 'Pérez',
                    dateOfBirth: '1990-01-26',
                    nationality: 'Indian',
                    constructorId: 'force_india',
                    name: 'Force India',
                    car: 'https://www.formula1.com/content/fom-website/en/championship/teams/Force-India/_jcr_content/teamCar.img.jpg' },
                { _id: "59bb3c8762665e15ec8e9d2f",
                    position: '8',
                    positionText: '8',
                    points: '55',
                    wins: '0',
                    driverId: 'ocon',
                    permanentNumber: '31',
                    code: 'OCO',
                    url: 'http://en.wikipedia.org/wiki/Force_India',
                    givenName: 'Esteban',
                    familyName: 'Ocon',
                    dateOfBirth: '1996-09-17',
                    nationality: 'Indian',
                    constructorId: 'force_india',
                    name: 'Force India',
                    car: 'https://www.formula1.com/content/fom-website/en/championship/teams/Force-India/_jcr_content/teamCar.img.jpg' },
                { _id: "59bb3c8762665e15ec8e9d30",
                    position: '9',
                    positionText: '9',
                    points: '36',
                    wins: '0',
                    driverId: 'sainz',
                    permanentNumber: '55',
                    code: 'SAI',
                    url: 'http://en.wikipedia.org/wiki/Scuderia_Toro_Rosso',
                    givenName: 'Carlos',
                    familyName: 'Sainz',
                    dateOfBirth: '1994-09-01',
                    nationality: 'Italian',
                    constructorId: 'toro_rosso',
                    name: 'Toro Rosso',
                    car: 'https://www.formula1.com/content/fom-website/en/championship/teams/Toro-Rosso/_jcr_content/teamCar.img.jpg' },
                { _id: "59bb3c8762665e15ec8e9d31",
                    position: '10',
                    positionText: '10',
                    points: '34',
                    wins: '0',
                    driverId: 'hulkenberg',
                    permanentNumber: '27',
                    code: 'HUL',
                    url: 'http://en.wikipedia.org/wiki/Renault_F1',
                    givenName: 'Nico',
                    familyName: 'Hülkenberg',
                    dateOfBirth: '1987-08-19',
                    nationality: 'French',
                    constructorId: 'renault',
                    name: 'Renault',
                    car: 'https://www.formula1.com/content/fom-website/en/championship/teams/Renault/_jcr_content/teamCar.img.jpg' },
                { _id: "59bb3c8762665e15ec8e9d32",
                    position: '11',
                    positionText: '11',
                    points: '31',
                    wins: '0',
                    driverId: 'massa',
                    permanentNumber: '19',
                    code: 'MAS',
                    url: 'http://en.wikipedia.org/wiki/Williams_Grand_Prix_Engineering',
                    givenName: 'Felipe',
                    familyName: 'Massa',
                    dateOfBirth: '1981-04-25',
                    nationality: 'British',
                    constructorId: 'williams',
                    name: 'Williams',
                    car: 'https://www.formula1.com/content/fom-website/en/championship/teams/Williams/_jcr_content/teamCar.img.jpg' },
                { _id: "59bb3c8762665e15ec8e9d33",
                    position: '12',
                    positionText: '12',
                    points: '24',
                    wins: '0',
                    driverId: 'stroll',
                    permanentNumber: '18',
                    code: 'STR',
                    url: 'http://en.wikipedia.org/wiki/Williams_Grand_Prix_Engineering',
                    givenName: 'Lance',
                    familyName: 'Stroll',
                    dateOfBirth: '1998-10-29',
                    nationality: 'British',
                    constructorId: 'williams',
                    name: 'Williams',
                    car: 'https://www.formula1.com/content/fom-website/en/championship/teams/Williams/_jcr_content/teamCar.img.jpg' }


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