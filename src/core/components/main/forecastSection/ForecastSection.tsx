import useWeatherContext from "../../../store/weather/hook";
import WeatherList from "../globals/weather/WeatherList";

export default function ForecastSection() {
  const {state : {forecast}} = useWeatherContext();
  return(
    <section className="flex flex-col w-full gap-4 py-4">
      <p className="text-2xl">Forecast(7 days)</p>
      
      {forecast.slice(0, 7).map((forecastItem, index) => (
        <WeatherList key={index} forecast={forecastItem} />
      ))}    
    </section>
  );
};
