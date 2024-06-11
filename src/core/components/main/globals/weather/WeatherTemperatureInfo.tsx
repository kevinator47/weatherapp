import WeatherKelvinFormat from "./WeatherKelvinFormat";
import WeatherMinMaxTemperature from "./WeatherMinMaxTemperature";

type Props = {
    temp: number;
    feelsLike : number;
    minTemp: number;
    maxTemp: number;
};

const WeatherTemperatureInfo: React.FC<Props> = ({ temp, feelsLike, minTemp, maxTemp}) => {
  return(
    <div className="flex flex-col justify-center items-center">
      <WeatherKelvinFormat temp={temp} className="text-5xl" />

      <div className="flex gap-1">
        <span className="text-xs">feels like</span>
        <WeatherKelvinFormat temp={feelsLike} className="text-xs" />
      </div>

      <WeatherMinMaxTemperature min={minTemp} max={maxTemp} />
    </div>
  );
};

export default WeatherTemperatureInfo;