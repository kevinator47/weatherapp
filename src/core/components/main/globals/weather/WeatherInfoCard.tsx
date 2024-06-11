type Props = {
  name: string;
  value: number | string;
};

const WeatherInfoCard: React.FC<Props> = ({ name, value }) => {
  return (
    <div className="flex flex-col justify-between gap-2 items-center text-xs font-semibold text-black/80">
      <span className="font-bold">{name.replace('_', ' ')}:</span>
      <span>{value}</span>
    </div>
  );
};

export default WeatherInfoCard;
