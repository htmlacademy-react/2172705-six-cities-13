export const getIconSize = (sectionName: string) => {
  switch(sectionName) {
    case 'place-card':
      return {
        width: 18,
        height: 19
      };
    case 'offer':
      return {
        width: 31,
        height: 33
      };
    default:
      throw new Error('There are no image sizes provided for this section name');
  }
};
