export const getLogoSize = (sectionName: string) => {
  switch (sectionName) {
    case 'header':
      return {
        width: 81,
        height: 41,
      };
    case 'footer':
      return {
        width: 64,
        height: 33
      };
    default:
      throw new Error('There are no image sizes provided for this section name');
  }
};

