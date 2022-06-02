export interface CurrentWeatherProps {
    temp: number;
    pressure: number;
    humidity: number;
    uvi: number;
    clouds: number;
    wind_speed: number;
}

export interface ProductProps {
    timezone: string;
    lat: number;
    lon: number;
    current: CurrentWeatherProps;
    currentLocationData: [];
}

export interface DateTimeProps {
    locationData: ProductProps;
    dayPeriod: boolean;
}

export interface IconProps {
    dayPeriod: boolean;
}