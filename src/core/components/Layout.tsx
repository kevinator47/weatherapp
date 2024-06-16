import React from "react";
import NavBar from "./navBar/NavBar.tsx";
import WeatherProvider from "../store/weather/provider.tsx";

function RootLayout({children} :{children : React.ReactNode}){
  return(
    <WeatherProvider>
      <div className="flex flex-col gap-4 bg-gray-100 min-h-screen">
        <NavBar />    
        {children}
      </div>
    </WeatherProvider>
  );
};

export default RootLayout;