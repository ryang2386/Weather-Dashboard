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
  private async read(filePath: string) {
    // const filePath = './searchHistory.json';
    try {
      const data = fs.readFileSync(filePath, 'utf8');
      const cities: City[] = JSON.parse(data);
      return cities;
    } catch (err) {
      console.error('Failed to read searchHistory.json', err);
      return [];
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
  async getCities(): Promise<City[]> {
    const filePath = './searchHistory.json';
    try {
      const cities: City[] = await this.read(filePath);
      // const cities = JSON.parse(data);
      return cities;
  } catch (err) {
    console.error("JSON file cannot be read", err);
    return [];
  }
  }
  // TODO Define an addCity method that adds a city to the searchHistory.json file
  async addCity(city: string) {
    const filePath = './searchHistory.json';
    try {
      const data = fs.readFileSync(filePath, 'utf8');
      const cities: City[] = JSON.parse(data);
      const newCity = new City(city, cities.length.toString());
      cities.push(newCity);
      await this.write(cities);
    } catch (err) {
      console.error('Failed to add city to searchHistory.json', err);
    }
  }
  // * BONUS TODO: Define a removeCity method that removes a city from the searchHistory.json file
  async removeCity(id: string) {}
}

export default new HistoryService();
