import React, { Component } from 'react';
import SwapiService from '../../services/swapiService';
import ErrorIndicator from '../error-indicator/error-indicator';
import Preloader from '../preloader/preloader';

import './random-planet.css';
import RandomPlanetView from './RandomPlanetView';

export default class RandomPlanet extends Component {
  swapi = new SwapiService();
  state = {
    planet: {},
    error: false,
    loading: true
  }

  setRandomPlanet(planet) {
    this.setState({ planet, loading: false });
  }
  setError() {
    this.setState({
      error: true,
      loading: false
    });
  }

  getRandomPlanet(id) {
    this.swapi.getPlanet(id)
      .then(planet => this.setRandomPlanet(planet))
      .catch(() => this.setError())
  }

  componentDidMount() {
    setInterval(() => this.getRandomPlanet(Math.floor(Math.random() * 20) + 3), 5000)
  };



  render() {
    const { planet, error, loading } = this.state;

    const preloader = loading ? <Preloader /> : null;
    const content = planet && !loading && !error ? <RandomPlanetView planet={planet} /> : null;
    const errorMessage = error ? <ErrorIndicator /> : null
    return (
      <div className="random-planet jumbotron rounded">
        {errorMessage}
        {preloader}
        {content}
      </div>

    );
  }
}


