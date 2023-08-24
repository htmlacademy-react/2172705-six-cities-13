import { TOTAL_STARS_COUNT } from '../const';

export const getWidthByStarsCount = (starsCount: number) => `${starsCount / TOTAL_STARS_COUNT * 100}%`;
