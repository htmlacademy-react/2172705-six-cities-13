export const AppRoute = {
  Root: '/',
  Login: '/login',
  Favorites: '/favorites',
  Offer: '/offer/:id',
  NotFound: '*'
} as const;

export const APIRoute = {
  Login: '/login',
  Logout: '/logout',
  Offers: '/offers',
  Nearby: '/nearby',
  Favorite: '/favorite',
  Comments: '/comments',
} as const;
