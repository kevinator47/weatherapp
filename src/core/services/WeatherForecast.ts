import {ForecastResponse, PlaceResponse } from "../types/weather";

export const getWeatherForecast = async (lat: number, lon: number, exclude: string): Promise<ForecastResponse> => {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&exclude=${exclude}&appid=${
            import.meta.env.VITE_OPEN_WEATHER_MAP_API_KEY}`
    );
    const data = await response.json();
    return data;
};

export const findPlaces = async (query: string): Promise<PlaceResponse> =>{
    const resp = await fetch(
        `https://api.openweathermap.org/data/2.5/find?q=${query}&appid=${
            import.meta.env.VITE_OPEN_WEATHER_MAP_API_KEY}`
    );
    const data = await resp.json();
    return data;

}