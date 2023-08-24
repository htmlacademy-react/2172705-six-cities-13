export const getSortedOffersByCity = (offers: PreviewOfferType[]) => offers.reduce((acc: { [key: string]: PreviewOfferType[] }, offer) => {
  if (!offer.isFavorite) {
    return acc;
  }

  if (!acc[offer.city.name]) {
    acc[offer.city.name] = [];
  }

  acc[offer.city.name].push(offer);

  return acc;
}, {});
