import useWeatherContext from "../../../store/weather/hook";
import ForecastList from "../globals/forecast/ForecastList";
import WeatherTemperatureInfo from "../globals/weather/WeatherTemperatureInfo";
import LocationDate from "./LocationDate";



export default function TodayInfo(){
  const {state : {forecast,todayForecast}} = useWeatherContext();
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