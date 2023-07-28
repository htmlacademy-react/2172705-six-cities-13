import { cities } from '../const';
import { LocationType } from './location';

export type CityType = {
  name: string;
  location: LocationType;
}

export type CitiesType = typeof cities[number];
