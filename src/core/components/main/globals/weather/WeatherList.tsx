import { Forecast } from "../../../../types/weather";
import WeatherInfoCard from "./WeatherInfoCard";

const WeatherList: React.FC<{ forecast: Forecast }> = ({ forecast }) => {
  const entries = Object.entries(forecast.main);
  return (
    <div className="flex overflow-x-auto justify-between gap-4 px-4 w-full pr-10">
      {entries.map(([name, value]) => (
        <div key={name} className="p-2">
          <WeatherInfoCard name={name} value={value} />
        </div>
      ))}
    </div>
  );
};
  
export default WeatherList;