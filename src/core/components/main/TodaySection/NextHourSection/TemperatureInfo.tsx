import WeatherKelvinFormat from "../../globals/WeatherKelvinFormat";
import WeatherMinMaxTemperature from "../../globals/WeatherMinMaxTemp";

type Props = {
    temp: number;
    feelsLike: number;
    minTemp: number;
    maxTemp: number;
};

function TemperatureInfo({temp , feelsLike, minTemp, maxTemp} : Props) {
  return(
    <div className="flex flex-col justify-center items-center px-4">
      <WeatherKelvinFormat temp={temp} className="text-5xl" />
    
      <p className="text-xs space-x-1 whitespace-nowrap">
        <span className="text-xs">feels like</span>
        <WeatherKelvinFormat temp={feelsLike} className="text-xs" />
      </p>
    
      <WeatherMinMaxTemperature min={minTemp} max={maxTemp} />
    </div>
  );
};

export default TemperatureInfo;