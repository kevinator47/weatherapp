import useWeatherContext from "../../../../store/weather/hook";
import WeatherPropCard from "./WeatherPropCard.tsx"

import VisibilityIcon from "./WeatherPropIcons/VisibilityIcon.tsx"
import HumidityIcon from "./WeatherPropIcons/HumidityIcon.tsx"
import WindSpeedIcon from "./WeatherPropIcons/WindSpeedIcon.tsx"
import AirPressureIcon from "./WeatherPropIcons/AirPressureIcon.tsx"
import SunriseIcon from "./WeatherPropIcons/SunriseIcon.tsx"
import SunsetIcon from "./WeatherPropIcons/SunsetIcon.tsx"
import { getTimeWithMinutes } from "../../../../utils/date.ts";


function WeatherPropsList(){
  const {state : {currentWeather}} = useWeatherContext();
  return(
    currentWeather&& <div 
    className="flex gap-4 justify-between overflow-x-auto 
    bg-yellow-300/80 w-full border rounded-xl py-4 px-6 shadow-sm"
    >
      <WeatherPropCard 
        propName="Visibility" 
        propValue={currentWeather?.visibility} 
        propIcon={<VisibilityIcon/>} />
      
      <WeatherPropCard 
        propName="Humidity" 
        propValue={currentWeather?.main.humidity} 
        propMeasureUnit="%" 
        propIcon={<HumidityIcon/>} />
      
      <WeatherPropCard 
        propName="Wind Speed" 
        propValue={Math.round(currentWeather?.wind.speed)} 
        propMeasureUnit="km/h" 
        propIcon={<WindSpeedIcon/>} />
      
      <WeatherPropCard 
        propName="Air Pressure" 
        propValue={currentWeather?.main.pressure} 
        propMeasureUnit="hPa" 
        propIcon={<AirPressureIcon/>} />
      
      <WeatherPropCard 
        propName="Sunrise" 
        propValue={getTimeWithMinutes(currentWeather?.sys.sunrise , currentWeather.timezone)} 
        propIcon={<SunriseIcon/>} />
      
      <WeatherPropCard 
        propName="Sunset" 
        propValue={getTimeWithMinutes(currentWeather?.sys.sunset, currentWeather.timezone)} 
        propIcon={<SunsetIcon/>} />
    </div>
  );
};

export default WeatherPropsList;

