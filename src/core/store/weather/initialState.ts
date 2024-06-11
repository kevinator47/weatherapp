import { Forecast, Places } from "../../types/weather";

export type WeatherState = {
    place: Places | null;
    forecast: Forecast[];
    todayForecast: Forecast | null;
  };
  
  export const initialState: WeatherState = {
    place: null,
    forecast: [],
    todayForecast: null,
  };