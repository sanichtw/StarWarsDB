import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import ItemDetails from '../item-details';

import './app.css';
import Preloader from '../preloader/preloader';
import PeoplePage from '../people-page';
import SwapiService from '../../services/swapiService';
import ErrorBoundry from '../error-boundry/error-boundry';
import Row from '../row/row';
import { Record } from '../item-details/item-details';


export default class App extends Component {
  swapi = new SwapiService();
  state = {
    selectedItem: null,
  }

  onItemSelected = (id) => {
    this.setState({ selectedItem: id })
  }


  render() {
    const { getPerson, getStarship,
      getImageUrlPerson, getImageUrlStarship } = this.swapi;

    const personDetails = (
      <ItemDetails getData={getPerson} selectedItem={1} getImageUrl={getImageUrlPerson}>
        <Record field={"gender"} label={"Gender"} />
        <Record field={"birthYear"} label={"Birth Year"} />
        <Record field={"eyeColor"} label={"Eye Color"} />
      </ItemDetails>
    );
    const starshipDetails = (
      <ItemDetails getData={getStarship} selectedItem={10} getImageUrl={getImageUrlStarship}>
        <Record field={"model"} label={"Model"} />
        <Record field={"length"} label={"Length"} />
        <Record field={"costInCredits"} label={"Cost"} />
      </ItemDetails>

    )
    return <div>
      <Header />
      {/* <RandomPlanet />
        <PeoplePage /> */}
      <Row left={personDetails} right={starshipDetails} />



      {/* <div className="row mb2">
        <div className="col-md-6">
          <ItemList onItemSelected={this.onItemSelected} getData={this.swapi.getAllPlanets}
            renderItem={({ name, population }) => `${name} (${population})`} />
        </div>
        <div className="col-md-6">
          <PersonDetails selectedItem={selectedItem} />
        </div>
      </div>

      <div className="row mb2">
        <div className="col-md-6">
          <ItemList onItemSelected={this.onItemSelected} getData={this.swapi.getAllStarships}
            renderItem={({ name, model }) => `${name} (${model})`} />
        </div>
        <div className="col-md-6">
          <PersonDetails selectedItem={selectedItem} />
        </div>
      </div> */}

    </div>

  }
}
