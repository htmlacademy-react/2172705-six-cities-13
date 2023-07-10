export const getImageSize = (sectionName: string) => {
  switch (sectionName) {
    case 'favorites':
      return {
        width: 150,
        height: 110
      };
    case 'cities':
      return {
        width: 260,
        height: 200
      };
    case 'near-places':
      return {
        width: 260,
        height: 200
      };
    default:
      throw new Error('There are no image sizes provided for this section name');
  }
};
