import { Forecast } from "../../../types/weather"
import ForecastList from "../globals/forecast/ForecastList";
import WeatherTemperatureInfo from "../globals/weather/WeatherTemperatureInfo";
import LocationDate from "./LocationDate";

type Props = {
    forecast : Forecast[];
    todayForecast : Forecast | null;
};

const TodaySection : React.FC<Props> = ({forecast, todayForecast}) => {
  return(
    <section>
      {todayForecast && <LocationDate dt={todayForecast.dt} />}
      <div className='flex gap-10 items-center justify-between min-h-40'>
        {todayForecast && (<WeatherTemperatureInfo 
          feelsLike={todayForecast.main.feels_like}
          temp={todayForecast.main.temp}
          minTemp={todayForecast.main.temp_min}
          maxTemp={todayForecast.main.temp_max} />
        )}
        <ForecastList forecast={forecast} />
      </div>
    </section>
  );
};
export default TodaySection;