import fs from 'fs';

// TODO: Define a City class with name and id properties
class City {
  name: string;
  id: string;

  constructor(name: string, id: string) {
    this.name = name;
    this.id = id;
  }
}
// TODO: Complete the HistoryService class
class HistoryService {
  // TODO: Define a read method that reads from the searchHistory.json file
  private async read() {
    const filePath = './searchHistory.json';
    try {
      const data = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(data);
    } catch (err) {
      console.error('Failed to read searchHistory.json', err);
  }
}
  // TODO: Define a write method that writes the updated cities array to the searchHistory.json file
  private async write(cities: City[]) {
    const filePath = './searchHistory.json';
    const data = JSON.stringify(cities, null, 2);
    try {
      fs.writeFileSync(filePath, data);
    } catch (err) {
      console.error('Failed to write to searchHistory.json', err);
  }
}
  // TODO: Define a getCities method that reads the cities from the searchHistory.json file and returns them as an array of City objects
  async getCities() {
    try {
      const filePath = await fetch('./searchHistory.json');
      if (!filePath.ok) {
        throw new Error('Failed to fetch search history');
      }
    const cities = await filePath.json();
    return cities;
    } catch (err) {
      console.error("JSON file cannot be read", err);
  }
  }
  // TODO Define an addCity method that adds a city to the searchHistory.json file
  async addCity(city: string) {}
  // * BONUS TODO: Define a removeCity method that removes a city from the searchHistory.json file
  async removeCity(id: string) {}
}

export default new HistoryService();
