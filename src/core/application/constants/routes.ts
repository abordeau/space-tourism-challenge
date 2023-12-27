export enum NavRoute {
  HOME = 'HOME',
  DESTINATION_PAGE = 'DESTINATION_PAGE',
  CREW_PAGE = 'CREW_PAGE'
}


type RouteRender = (...args: string[]) => string

export const Routes: Record<NavRoute, RouteRender> = {
  HOME: () => '/',
  DESTINATION_PAGE: (destination: string) => `/destination/${destination}`,
  CREW_PAGE: (crew: string) => `/crew/${crew}`
}
