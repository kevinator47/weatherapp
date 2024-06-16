import { kelvinToCelsius } from "../../../utils/temperature";

function WeatherKelvinFormat({temp, className} : {temp: number, className?: string}) {
    return <span className={className}>{Math.floor(kelvinToCelsius(temp))}º</span>
};

export default WeatherKelvinFormat;