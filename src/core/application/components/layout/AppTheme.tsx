import { DefaultTheme } from 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      primary: string
      secondary: string
      white: string
    }
    size: {
      text: string,
      heading: string
      heading2: string
      heading3: string
      heading4: string
      heading5: string
      subHeading: string
      subHeading2: string
      subHeading3: string
    },
    font: {
      default: string
      barlow: string
    }
    weight: {
      normal: number
      bold: number
    }
  }
}


const AppTheme: DefaultTheme = {
  color: {
    primary: '#0B0D17',
    secondary: '#D0D6F9',
    white: '#FFFFFF'
  },
  size: {
    text: '1.8rem',
    heading: '15rem',
    heading2: '10rem',
    heading3: '5.6rem',
    heading4: '3.2rem',
    heading5: '2.8rem',
    subHeading: '2.8rem',
    subHeading2: '1.4rem',
    subHeading3: '1.6rem'
  },
  font: {
    default: 'Bellefair',
    barlow: 'Barlow Condensed'
  },
  weight: {
    normal: 400,
    bold: 700
  }
}

export default AppTheme
