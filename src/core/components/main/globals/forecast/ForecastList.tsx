import { Forecast } from "../../../../types/weather.ts"
import { getTime } from "../../../../utils/date.ts";
import WeatherIcon from "../weather/WeatherIcon.tsx";
import ForecastCard from "./ForecastCard.tsx";

type Props = {
    forecast: Forecast[];
};

const ForecastList: React.FC<Props> = ({forecast}) => {
  
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
            <ForecastCard key={index}
            icon={<WeatherIcon iconname={getIcon(forecast)} />} 
            temp={forecast.main.temp} 
            time={getTime(forecast.dt).toString() + " : 00"} />
        ))}
        </div>
    );
};
export default ForecastList;