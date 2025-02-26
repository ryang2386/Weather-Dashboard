import dotenv from 'dotenv';
dotenv.config();

// TODO: Define an interface for the Coordinates object
interface Coordinates {
  lat: number;
  lon: number;
}

// TODO: Define a class for the Weather object
class Weather {
  temperature: number;
  pressure: number;
  humidity: number;
  tempMin: number;
  tempMax: number;

  constructor(temperature: number, pressure: number, humidity: number, tempMin: number, tempMax: number) {
    this.temperature = temperature;
    this.pressure = pressure;
    this.humidity = humidity;
    this.tempMin = tempMin;
    this.tempMax = tempMax;
  }
}

// TODO: Complete the WeatherService class
class WeatherService {
  // TODO: Define the baseURL, API key, and city name properties
  private baseURL: string;
  private apiKey: string;
  private cityName: string;

  constructor(baseURL: string, apiKey: string, cityName: string) {
    this.baseURL = baseURL;
    this.apiKey = apiKey;
    this.cityName = cityName;
  }
  // TODO: Create fetchLocationData method
  private async fetchLocationData(query: string) {
    const response = await fetch(query);
    const locationData = await response.json();
    return locationData;
  }
  // TODO: Create destructureLocationData method
  private destructureLocationData(locationData: Coordinates): Coordinates {
    const { lat, lon } = locationData;
    // this.buildWeatherQuery({ lat, lon });
    return { lat, lon };
  }
  // TODO: Create buildGeocodeQuery method
  private buildGeocodeQuery(): string {
    const query = `${this.baseURL}/geo/1.0/direct?q=${this.cityName}&limit=10&appid=${this.apiKey}`;
    return query;
  }
  // TODO: Create buildWeatherQuery method
  private buildWeatherQuery(coordinates: Coordinates): string {
    const query = `${this.baseURL}/data/2.5/forecast?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${this.apiKey}`;
    return query;
  }
  // TODO: Create fetchAndDestructureLocationData method
  private async fetchAndDestructureLocationData(): Promise<Coordinates> {
    const query = this.buildGeocodeQuery();
    const locationData = await this.fetchLocationData(query);
    const coordinates = this.destructureLocationData(locationData[0]);
    return coordinates;
  }
  // TODO: Create fetchWeatherData method
  private async fetchWeatherData(coordinates: Coordinates) {
    const query = this.buildWeatherQuery(coordinates);
    const response = await fetch(query);
    const weatherData = await response.json();
    this.parseCurrentWeather(weatherData);
    return weatherData;
  }
  // TODO: Build parseCurrentWeather method
  private parseCurrentWeather(response: any) {
    
  }
  // TODO: Complete buildForecastArray method
  private buildForecastArray(currentWeather: Weather, weatherData: any[]) {}
  // TODO: Complete getWeatherForCity method
  async getWeatherForCity(city: string) {

  }
}

export default new WeatherService();
