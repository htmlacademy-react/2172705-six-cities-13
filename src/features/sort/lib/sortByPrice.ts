import { sortByProperty } from '@/shared/lib';

export const sortByPriceAsc = () => sortByProperty('price');

export const sortByPriceDesc = () => sortByProperty('price', false);
