export const screenWidths = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopM: 1200,
  laptopL: 1440,
  desktop: 1980,
  wide: 2560
}

export const deviceSizes = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopM: '1200px',
  laptopL: '1440px',
  desktop: '1980px',
  wide: '2560px'
}

export const breakpoints = {
  mobileS: `(min-width: ${deviceSizes.mobileS})`,
  mobileM: `(min-width: ${deviceSizes.mobileM})`,
  mobileL: `(min-width: ${deviceSizes.mobileL})`,
  tablet: `(min-width: ${deviceSizes.tablet})`,
  laptop: `(min-width: ${deviceSizes.laptop})`,
  laptopM: `(min-width: ${deviceSizes.laptopM})`,
  laptopL: `(min-width: ${deviceSizes.laptopL})`,
  desktop: `(min-width: ${deviceSizes.desktop})`,
  wide: `(min-width: ${deviceSizes.wide})`
}
