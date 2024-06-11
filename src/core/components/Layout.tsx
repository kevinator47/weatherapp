
import NavBar from "./navBar/NavBar.tsx"
import WeatherProvider from "../store/weather/provider.tsx";
import WeatherContainer from "./WeatherContainer.tsx";
  
export default function RootLayout() {
  return(
    <WeatherProvider>
      <div className="flex flex-col gap-4 bg-gray-100 min-h-screen ">
        <NavBar />
        <main className="px-3 max-w-7xl mx-auto flex flex-col gap-9 w-full pb-10 pt-4">
          <WeatherContainer />
        </main>
      </div>
    </WeatherProvider>
  );
};
  