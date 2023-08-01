import { sortByPropertyAsc, sortByPropertyDesc } from '@/shared/lib';

export const sortByPriceAsc = () => sortByPropertyAsc('price');

export const sortByPriceDesc = () => sortByPropertyDesc('price');
