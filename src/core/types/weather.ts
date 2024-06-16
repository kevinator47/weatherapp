type Coordinates = {
  lat: number;
  lon: number;
};

export type City = {
  id: number;
  name: string ;
  coord: Coordinates;
};

//---------------------------------------------------
export type ForecastItem = {
  time: string;
  icon: string;
  temp: number;
};

type ForecastMain = {
  feels_like: number;
  grnd_level: number;
  humidity: number;
  pressure: number;
  sea_level: number;
  temp: number;
  temp_kf: number;
  temp_max: number;
  temp_min: number;
};

export type ForecastWeather = {
  description: string;
  icon: string;
  id: number;
  main: string; 
};

type Wind = {
  speed: number;
  deg: number;
  gust: number;
}

type Rain = {
  "1h": number;
}

type Sys = {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

//---------------------------------------------------
export type Forecast = {
  clouds: {
      all: number
  };
  dt: number;
  dt_txt: string;
  main: ForecastMain;
  weather: ForecastWeather[]
};

export type CurrentWeatherData = {
  base: string;
  coord: Coordinates;
  dt: number;
  main: ForecastMain;
  weather: ForecastWeather[];
  
  visibility: number;
  wind: Wind;
  rain: Rain;
  sys: Sys;
  clouds: {
    all: number
  };

  timezone: number;
  id: number;
  name: string;
  cod: number;
}

//----------------------------------------------
export type PlaceResponse = {
  cod: string;
  count : number;
  list: City[];
  message: string;
};

export type ForecastResponse = {
  cod: string;
  list: Forecast[];   
};

