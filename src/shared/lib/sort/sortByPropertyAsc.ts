export const sortByPropertyAsc = <T extends object>(propertyName: keyof T) => (first: T, second: T) => +first[propertyName] - +second[propertyName];
