/*
  Nome da cidade (name)
  Velocidade do vento (wind)
  Umidade (main)
  Temperatura (main)
  Temperatura mínima (main)
  Temperatura máxima (main)
  Pressão atmosférica (main)
  Cobertura de nuvens (clouds)
  Descrição meteorológica (weather)
  Ícone meteorológico (weather)
*/

export interface Coordinates {
  lon: number;
  lat: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface WeatherMain {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

export interface Wind {
  speed: number;
  deg: number;
}

export interface Clouds {
  all: number;
}

export interface Sys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export interface WeatherResponse {
  coord: Coordinates;
  weather: Weather[];
  base: string;
  main: WeatherMain;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: {};
  timezone: number;
  id: number;
  name: string;
  cod: number;
}
