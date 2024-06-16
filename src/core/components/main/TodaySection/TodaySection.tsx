import NextHourInfo from "./NextHourSection/NextHoursInfo";
import WeatherPropsInfo from "./WeatherPropsSection/WeatherPropsInfo";

function TodaySection() {
  return(
    <section className="space-y-4">
        <NextHourInfo />
        <WeatherPropsInfo />
    </section>
  );
};

export default TodaySection;