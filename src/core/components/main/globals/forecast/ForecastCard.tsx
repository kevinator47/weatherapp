import WeatherKelvinFormat from "../weather/WeatherKelvinFormat";

type Props = {
    time: string;
    icon: React.ReactElement;
    temp: number;
};

const ForecastCard: React.FC<Props> = ({icon, time , temp}) => {
    return(
        <div className="flex flex-col items-center justify-between text-xs font-semibold">
            <span>{time + " PM "}</span>
            {icon}
            <WeatherKelvinFormat temp={temp}/>
        </div>
    );
};

export default ForecastCard;