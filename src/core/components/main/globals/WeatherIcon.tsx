import React from "react";
import { cn } from "../../../utils/class.ts"

export default function WeatherIcon(props: React.HTMLProps<HTMLDivElement> & {iconname: string}) {
  return(
    <div {...props} className={cn("relative h-20 w-20")}>
    <img 
      width={100}
      height={100}
      alt="Weather Icon"
      className="absolute h-full w-full"
      src={`https://openweathermap.org/img/wn/${props.iconname}@4x.png`}/>        
    </div> 
  );
};