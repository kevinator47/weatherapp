import { useEffect } from "react";
import useWeatherContext from "../../core/store/weather/hook";
import { getWeatherForecast } from "../../core/services/WeatherForecast"
import { Places } from "../../core/types/weather";
import TodayInfo from "./main/todaySection/todayInfo";
import ForecastSection from "./main/forecastSection/ForecastSection";
import WeatherCardContainer from "./main/globals/weather/WeatherCardContainer";

const WeatherContainer = () => {
  const {
    state : {place},
    dispatch,
  } = useWeatherContext();

  useEffect(() => {
    
    if(place)
    {
      getPlaceForecast(place);
    }
    console.log("WeatherContainer" , place?.coord.lat, place?.coord.lon);
  }, [place])

  const getPlaceForecast = async (_place : Places) => {
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
  return(
    <div>
      <WeatherCardContainer>
        <TodayInfo />
      </WeatherCardContainer>

      <ForecastSection />  
    </div>
  );
};

export default WeatherContainer;