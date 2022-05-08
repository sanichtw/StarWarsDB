import React, { Component } from 'react';
import SwapiService from '../../services/swapiService';

import './random-planet.css';

export default class RandomPlanet extends Component {

  state = {
    randomPlanet: {}
  }

  getRandomPlanet(id) {
    const swapi = new SwapiService();
    let planet;
    swapi.getPlanet(id)
      .then(res => {
        this.setState((state) => {
          return {
            ...state,
            randomPlanet: res
          }
        });
      });
  }

  componentDidMount() {
    setInterval(() => this.getRandomPlanet(Math.floor(Math.random() * 10) + 1), 5000)
  };



  render() {
    return (
      <div className="random-planet jumbotron rounded">
        <img className="planet-image"
          src="https://starwars-visualguide.com/assets/img/planets/5.jpg" />
        <div>
          <h4>{this.state.randomPlanet.name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{this.state.randomPlanet.population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>{this.state.randomPlanet.rotation_period}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>{this.state.randomPlanet.diameter}</span>
            </li>
          </ul>
        </div>
      </div>

    );
  }
}
