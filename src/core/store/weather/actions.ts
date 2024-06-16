import { City, CurrentWeatherData, Forecast } from "../../types/weather";

export type WeatherTypes = "SET_PLACE" | "SET_FORECAST" | "SET_CURRENT";

type Action<T> = {
  type: WeatherTypes;
  payload: T;
};

interface ISetPlace extends Action<City> {
  type: "SET_PLACE";
}

interface ISetForecast extends Action<Forecast[]> {
  type: "SET_FORECAST";
}

interface ISetCurrent extends Action<CurrentWeatherData> {
  type: "SET_CURRENT"
}

export type TAction = ISetPlace | ISetForecast | ISetCurrent;