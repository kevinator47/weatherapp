import React from "react";

type Props = {
    propName: string,
    propValue: number | string,
    propMeasureUnit?: string,
    propIcon: React.ReactElement
}

function WeatherPropCard({propName,propValue, propIcon, propMeasureUnit}:Props){
 if(propMeasureUnit === undefined)
 {
    propMeasureUnit = "";
 } 
  return(
    <div className="flex flex-col justify-between gap-2 items-center text-xs font-semibold" >
      <p className="whitespace-nowrap">{propName}</p>
      {propIcon}
      <p>{propValue.toString() + propMeasureUnit}</p>
    </div>
  );

};

export default WeatherPropCard;

