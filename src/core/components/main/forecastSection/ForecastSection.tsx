import { Forecast } from "../../../types/weather";
import WeatherList from "../globals/weather/WeatherList";

type Props = {
    forecast : Forecast[];
};

const ForecastSection : React.FC<Props> = ({forecast}) => {
  return(
    <section className="flex flex-col w-full gap-4">
      <p className="text-2xl">Forecast(7 days)</p>
      
      {forecast.slice(0, 7).map((forecastItem, index) => (
        <WeatherList key={index} forecast={forecastItem} />
      ))}    
    </section>
  );
};
export default ForecastSection
