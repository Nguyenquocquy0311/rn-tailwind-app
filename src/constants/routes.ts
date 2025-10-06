export const APP = {
  ROOT: '/(tabs)',
  EXPLORE: '/(tabs)/explore',
} as const;

export const ROUTES = {
  APP,
} as const;

export const DEFAULT_APP_ROUTE = ROUTES.APP.ROOT;
