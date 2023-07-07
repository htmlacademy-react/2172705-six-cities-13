import dayjs from 'dayjs';

export const convertDate = (date: string, format:string): string => dayjs(date).format(format);
