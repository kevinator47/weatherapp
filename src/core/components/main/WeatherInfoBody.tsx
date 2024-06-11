import React from "react";
import TodaySection from "./todaySection/todaySection";
import ForecastSection from "./forecastSection/ForecastSection";

type Props = {
    place : string;
};

const WeatherInfoBody: React.FC<Props> = ({place}) => {
  return(
    <div>
        <TodaySection />
        <ForecastSection />
    </div>
  );

};

export default WeatherInfoBody;