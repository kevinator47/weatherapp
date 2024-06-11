import {ArrowUpIcon , ArrowDownIcon} from '@heroicons/react/24/solid';
import WeatherKelvinFormat from './WeatherKelvinFormat';
import { cn } from '../../../../utils/class';

type Props = {
  min: number;
  max: number;
  className?: string;
  minClassName?: string;
  maxClassName?: string;
};

const WeatherMinMaxTemperature:React.FC<Props> = ({
  min, max, className, minClassName, maxClassName}) => {
  
    return(
      <div className="flex space-x-2 justify-between">
        <div className="flex items-center">
          <WeatherKelvinFormat 
            className={cn(className, minClassName)} 
            temp={min} />
          <ArrowDownIcon className='h-3 w-3' />
        </div>

        <div className="flex items-center">
          <WeatherKelvinFormat 
            className={cn(className, maxClassName)} 
            temp={max} />
          <ArrowUpIcon className='h-3 w-3' />
        </div>
      </div>
    );
};
export default WeatherMinMaxTemperature;