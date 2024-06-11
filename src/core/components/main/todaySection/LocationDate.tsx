import { GetDayOfWeek, GetFullDate } from "../../../utils/date";

type Props = {
    dt : number;
};

const LocationDate: React.FC<Props> = ({dt}) => {
  return(
    <h2 className="flex gap-1 text-2xl items-end">
    <p>{GetDayOfWeek(dt)}</p>
    <p className="text-lg">{GetFullDate(dt)}</p>
    </h2>
  );
};
export default LocationDate;