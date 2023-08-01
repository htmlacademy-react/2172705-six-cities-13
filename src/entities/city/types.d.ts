type CityType = {
  name: string;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
}

type CityTypes = typeof import('./const').cities[number];
