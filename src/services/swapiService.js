export default class SwapiService {
  _apiBase = 'https://swapi.dev/api/';

  async getResource(url) {
    const response = await fetch(`${this._apiBase}${url}`);

    if (!response.ok) {
      throw new Error('Something is wrong')
    }
    const body = await response.json();
    return body
  };


  getAllPlanets = async () => {
    const response = await this.getResource(`planets`);
    return response.results.map(this._transformPlanet)
  };

  getAllPeoples = async () => {
    const response = await this.getResource(`people`);
    return response.results.map(this._transformPerson)
  };

  getAllStarships = async () => {
    const response = await this.getResource(`starships`);
    return response.results.map(this._transformStarship)
  };

  getPlanet = async (id) => {
    const planet = await this.getResource(`planets/${id}`);
    return this._transformPlanet(planet)
  };

  getPerson = async (id) => {
    const person = await this.getResource(`people/${id}`);
    return this._transformPerson(person)
  }
  getStarship = async (id) => {
    const starship = await this.getResource(`starships/${id}`);
    return this._transformStarship(starship)
  }


  _extractId(id) {
    return id.match(/\/([0-9]*)\/$/)[1];
  }

  _transformStarship(starship) {
    return {
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.costInCredits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargoCapacity,
      id: this._extractId(starship.url),
    }
  };

  _transformPerson(person) {
    return {
      gender: person.gender,
      birthYear: person.birth_year,
      name: person.name,
      id: this._extractId(person.url),
    }
  };

  _transformPlanet(planet) {
    return {
      diameter: planet.diameter,
      population: planet.population,
      name: planet.name,
      rotationPeriod: planet.rotation_period,
      id: this._extractId(planet.url),
    }
  };
};
