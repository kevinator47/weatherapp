import useWeatherContext from "../../../../store/weather/hook";
import LocationDate from "./LocationDate";
import NextHourCardList from "./NextHourCardList";
import TemperatureInfo from "./TemperatureInfo";

function NextHourInfo(){
  const {state : {todayForecast}} = useWeatherContext();
  return(
    todayForecast && <div className="space-y-2" >
      <LocationDate dt={todayForecast?.dt} />
      <div className="flex gap-10 items-center py-4 px-6 shadow-sm bg-white border rounded-xl w-full">
        <TemperatureInfo 
        temp={todayForecast.main.temp} 
        feelsLike={todayForecast.main.feels_like} 
        maxTemp={todayForecast.main.temp_max} 
        minTemp={todayForecast.main.temp_min} />
      <NextHourCardList />
      </div>
    </div>
  );
};
export default NextHourInfo;