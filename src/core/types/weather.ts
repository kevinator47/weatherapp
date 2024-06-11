export type Coordinates = {
    lat: number;
    lon: number;
};

export type Places = {
    id: number;
    name: string ;
    coord: Coordinates;
};

export type ForecastMain = {
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

export type Forecast = {
    clouds: {
        all: number
    };
    dt: number;
    dt_txt: string;
    main: ForecastMain;
    weather: ForecastWeather[]
};
