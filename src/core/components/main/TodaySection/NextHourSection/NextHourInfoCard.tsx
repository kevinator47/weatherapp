import WeatherKelvinFormat from "../../globals/WeatherKelvinFormat";

type Props = {
    time: string;
    icon: React.ReactElement;
    temp: number;
};

function NextHoursInfoCard({icon, time , temp} : Props) {
  return(
    <div className="flex flex-col items-center justify-between text-xs font-semibold">
      <span>{time + " PM "}</span>
      {icon}
      <WeatherKelvinFormat temp={temp}/>
    </div>
  );
};

export default NextHoursInfoCard;