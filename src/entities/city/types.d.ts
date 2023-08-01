type CityType = {
  name: string;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
}

type CitiesType = typeof import('./const').cities[number];
