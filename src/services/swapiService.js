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


  getAllPlanets = async () => await this.getResource(`planets`);
  getAllPeoples = async () => await this.getResource(`people`);
  getAllStarships = async () => await this.getResource(`starships`);
  getPlanet = async (id) => await this.getResource(`planets/${id}`);
  getPerson = async (id) => await this.getResource(`people/${id}`);
  asyncgetStarship = async (id) => await this.getResource(`starships/${id}`);
};
// const swapi = new SwapiService();

// export const

  // getAllPlanets().then((res) => console.log(res));
  // getAllPeoples().then((res) => console.log(res));
  // getAllStarships().then((res) => console.log(res));
  // getPlanet(3).then((res) => console.log(res));