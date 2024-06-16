import WeatherConditionInfo from "./WeatherConditionInfo.tsx";
import WeatherPropsList from "./WeatherPropsList.tsx";

function WeatherPropsInfo(){
  return(
    <div className="flex gap-4">
      <WeatherConditionInfo />
      <WeatherPropsList />
    </div>
    
  );
};

export default WeatherPropsInfo;
