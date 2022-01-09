const { getRoles } = require("@testing-library/react")

class SwapiService {

  _apiBase = 'https://swapi.dev/api/'

  async getRes(url) {
    const res = await fetch(`${this._apiBase}${url}`)
    if (!res.ok) {
      throw new Error(`Couldn't fetch ${url}`)
  }
    return await res.json()
  }

  async getAllPeople() {
    const res = await this.getRes(`people/`)
    return res.results
  }
  
  getPerson(id) {
    return this.getRes(`people/${id}`)
  }

}

const swapi = new SwapiService()
swapi.getPerson(3).then((person) => {
    console.log(person.name);
})