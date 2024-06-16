
import { Forecast } from "../../../types/weather.ts"
import { getTime } from "../../../utils/date.ts";
import WeatherIcon from "./WeatherIcon.tsx";
import ForecastInfoCard from "./ForecastInfoCard.tsx";
import useWeatherContext from "../../../store/weather/hook.ts";


function ForecastList() {
  const {state : {forecast}} = useWeatherContext();
  
  const getIcon= (forecast : Forecast) => {
    let icon = "10n";
    
    if(forecast.weather.length > 0) 
    {
      icon = forecast.weather[0].icon;
    }
    return icon;    
  };
    
  return(
    <div className="w-full overflow-x-auto flex gap-10">
    {
      forecast.map((forecast,index) => (
      <ForecastInfoCard key={index}
        icon={<WeatherIcon iconname={getIcon(forecast)} />} 
        temp={forecast.main.temp} 
        time={getTime(forecast.dt).toString() + " : 00"} />
      ))}
    </div>
  );
};

export default ForecastList;