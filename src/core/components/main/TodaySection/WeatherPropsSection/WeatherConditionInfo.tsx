import useWeatherContext from "../../../../store/weather/hook";
import { CurrentWeatherData } from "../../../../types/weather";
import WeatherIcon from "../../globals/WeatherIcon";

function WeatherConditionInfo() {
  
const {state : {currentWeather}} = useWeatherContext();
const getIcon= (forecast : CurrentWeatherData) => {
  let icon = "10n";
  
  if(forecast.weather.length > 0) 
  {
    icon = forecast.weather[0].icon;
  }
  return icon;    
};
const getDescription= (forecast : CurrentWeatherData) => {
  let desc = "No information";
  
  if(forecast.weather.length > 0) 
  {
    desc = forecast.weather[0].description;
  }
  return desc;    
};
  return(
    currentWeather && <div className="flex flex-col justify-center items-4 px-4 py-4 bg-white border rounded-xl shadow-sm w-fit ">
      <p className="capitalize text-center">{getDescription(currentWeather)}</p>
      <WeatherIcon iconname={getIcon(currentWeather)} />
    </div>
  );
};

export default WeatherConditionInfo;