import React from "react";
import { findPlaces } from "../../services/WeatherForecast.ts";
import useWeatherContext from "../../store/weather/hook.ts";
import NavHeader from "./NavHeader.tsx";
import MyLocationIcon from "./NavIcons/MyLocationIcon.tsx";
import OutLineLocationIcon from "./NavIcons/OutLineLocationIcon.tsx";
import SearchBox from "./SearchBox.tsx";

export default function NavBar() {
  
  const [search, setSearch] = React.useState("");
  const {dispatch} = useWeatherContext();

  const findPlacesAsync = async () => {
    try{
      const data = await findPlaces(search);
      if(data.list.length > 0){
        dispatch({type: "SET_PLACE", payload: data.list[0]});
      }
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  }
  const onHandleSearch = async () => {
    await findPlacesAsync();
  };

  return(
    <nav className="shadow-sm sticky top-0 left-0 z-50 bg-white">
      <div className="h-[80px] w-full flex justify-between items-center max-w-7xl px-3 mx-auto">
        <NavHeader />
        <section className="flex gap-2 items-center">
          <MyLocationIcon />
          <OutLineLocationIcon />
          <p className="text-slate-900/80 text-sm">{search}</p>
          <SearchBox value={search} onChange={setSearch} onSearch={onHandleSearch} />
        </section>
      </div>
    </nav>
    );
};