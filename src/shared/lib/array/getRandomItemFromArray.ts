export const getRandomItemFromArray = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];
