export const sortByPropertyDesc = <T extends object>(propertyName: keyof T) => (first: T, second: T) => +second[propertyName] - +first[propertyName];
