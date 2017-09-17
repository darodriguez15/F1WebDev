import React, {Component} from "react";

class Drivers extends  Component{
    constructor(props)
{
    super(props);
    this.state = {
        drivers:[
            { _id: "59b842e0020b9e8aad507c57",
                driverId: 'wehrlein',
                permanentNumber: '94',
                code: 'WEH',
                url: 'http://en.wikipedia.org/wiki/Pascal_Wehrlein',
                givenName: 'Pascal',
                familyName: 'Wehrlein',
                dateOfBirth: '1994-10-18',
                profile_photo: 'https://www.formula1.com/content/fom-website/en/championship/drivers/pascal-wehrlein/_jcr_content/image.img.1024.medium.jpg/1490267768622.jpg',
                construtor: 'Sauber',
                c_image: 'https://www.formula1.com/content/fom-website/en/championship/teams/Sauber/_jcr_content/logo.img.jpg/1496929341329.jpg',
                nationality: 'German' },
            { _id: "59b842e0020b9e8aad507c56",
                driverId: 'vettel',
                permanentNumber: '5',
                code: 'VET',
                url: 'http://en.wikipedia.org/wiki/Sebastian_Vettel',
                givenName: 'Sebastian',
                familyName: 'Vettel',
                dateOfBirth: '1987-07-03',
                profile_photo: 'https://www.formula1.com/content/fom-website/en/championship/drivers/sebastian-vettel/_jcr_content/image.img.1024.medium.jpg/1490267969275.jpg',
                construtor: 'Ferrari',
                c_image: 'https://www.formula1.com/content/fom-website/en/championship/teams/Ferrari/_jcr_content/logo.img.jpg/1496921233645.jpg',
                nationality: 'German' },
            { _id: "59b842e0020b9e8aad507c43",
                driverId: 'bottas',
                permanentNumber: '77',
                code: 'BOT',
                url: 'http://en.wikipedia.org/wiki/Valtteri_Bottas',
                givenName: 'Valtteri',
                familyName: 'Bottas',
                dateOfBirth: '1989-08-28',
                profile_photo: 'https://www.formula1.com/content/fom-website/en/championship/drivers/valtteri-bottas/_jcr_content/image.img.1024.medium.jpg/1490267884485.jpg',
                construtor: 'Mercedes',
                c_image: 'https://www.formula1.com/content/fom-website/en/championship/teams/Mercedes/_jcr_content/logo.img.jpg/1486740329957.jpg',
                nationality: 'Finnish' },
            { _id: "59b842e0020b9e8aad507c42",
                driverId: 'alonso',
                permanentNumber: '14',
                code: 'ALO',
                url: 'http://en.wikipedia.org/wiki/Fernando_Alonso',
                givenName: 'Fernando',
                familyName: 'Alonso',
                dateOfBirth: '1981-07-29',
                profile_photo: 'https://www.formula1.com/content/fom-website/en/championship/drivers/fernando-alonso/_jcr_content/image.img.1024.medium.jpg/1490268277428.jpg',
                construtor: 'McLaren',
                c_image: 'https://www.formula1.com/content/fom-website/en/championship/teams/McLaren/_jcr_content/logo.img.jpg/1496929840866.jpg',
                nationality: 'Spanish' }


        ]
    };
}
    renderDrivers()
    {
        return this.state.drivers.map((t)=> {
            return(<div className="col-sm-4 caja">
                <br/>
                <img className="fotoPerfil" src={t.profile_photo} alt=""/>
                <img className="fotoScuderia" src={t.c_image} alt=""/>
                <p className="descripcion">Name: {t.givenName} {t.familyName}</p>
                <p className="descripcion">Number : {t.permanentNumber}</p>
                <p className="descripcion">Date of birth: {t.dateOfBirth}</p>
                <p className="descripcion">Nacionality: {t.nationality}</p>
                <br/>



                </div>);
    });
    }

    render(){
        return(
            <div className="Drivers">
                <br/>
                <h1>Drivers Season 2017</h1>
                <br/>
                <br/>
                <div className="row">

                    {this.renderDrivers()}
                </div>
            </div>
        )
    }
}

export default Drivers;