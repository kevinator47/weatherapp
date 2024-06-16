import { Forecast, City, CurrentWeatherData } from "../../types/weather";

export type WeatherState = {
    place: City | null;
    forecast: Forecast[];
    todayForecast : Forecast | null;
    currentWeather : CurrentWeatherData | null;
  };
  
  export const initialState: WeatherState = {
    place: null,
    forecast: [],
    todayForecast: null,
    currentWeather : null,
  };