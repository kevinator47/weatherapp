import { useEffect } from "react";
import useWeatherContext from "../../store/weather/hook";

import { City } from "../../types/weather";
import { getCurrentWeather, getWeatherForecast } from "../../services/WeatherForecast";

import TodaySection from "./TodaySection/TodaySection";
import ForecastSection from "./ForecastSection/ForecastSection";


function MainLayout(){
  const { state : {place}, dispatch} = useWeatherContext();
  
  useEffect(() => {
    
    if(place)
    {
      getPlaceForecast(place);
      getPlaceCurrentWeather(place);
    }
    console.log("WeatherContainer" , place?.coord.lat, place?.coord.lon);
  }, [place])

  const getPlaceForecast = async (_place : City) => {
    try{
      const data = await getWeatherForecast(
        _place.coord.lat,
        _place.coord.lon,
        "minutely, alerts"
      );
      
      dispatch({type: "SET_FORECAST" ,payload: data.list});
    }catch(e){
      console.error(e);
    }
  }
  
  const getPlaceCurrentWeather = async(_place : City) => {
    try{
      const data = await getCurrentWeather(_place.coord.lat , _place.coord.lon);
      console.log(data)
      dispatch({type: "SET_CURRENT" , payload:data});
    }catch(e){
      console.error(e);
    } 
  }

  return(   
    <main className="px-3 max-w-7xl mx-auto flex flex-col gap-9 w-full pb-10 pt-4">
      <TodaySection />
      <ForecastSection />
    </main>
  );
};

export default MainLayout;
