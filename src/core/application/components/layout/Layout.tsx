import React from 'react'
import styled from 'styled-components'
import { usePathname } from 'next/navigation'
import { breakpoints, deviceSizes } from '@/styles/breakpoints'
import useMediaQuery from '@/core/application/hooks/useMediaQuery'
import MobileHeader from '@/core/application/components/layout/MobileHeader'
import Header from '@/core/application/components/layout/Header'
import { useRouter } from 'next/router'

export interface ILayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  const isMobile = useMediaQuery(parseInt(deviceSizes.laptop))
  const { asPath: path } = useRouter()


  const getCurrentStep = (path?: string): string => {
    let step
    if (path?.startsWith('/destination')) {
      step = 'destination'
    } else if (path?.startsWith('/crew')) {
      step = 'crew'
    } else if (path?.startsWith('/technologie')) {
      step = 'technology'
    } else {
      step = 'home'
    }

    return step
  }
  return (
    <Container className={`${getCurrentStep(path)}`}>
      {isMobile ? <MobileHeader /> : <Header />}
      <Wrapper id='layoutWrapper'>
        {children}
      </Wrapper>

    </Container>
  )
}

export default Layout


const Container = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    transition: background-image 0.2s ease-in-out;

    &.home {
        background-image: url('/assets/home/background-home-mobile.jpg')
    }

    &.destination {
        background-image: url('/assets/destination/background-destination-mobile.jpg')
    }

    &.crew {
        background-image: url('/assets/crew/background-crew-mobile.jpg')
    }

    &.technology {
        background-image: url('/assets/technology/background-technology-mobile.jpg')
    }

    @media ${breakpoints.laptop} {
        &.home {
            background-image: url('/assets/home/background-home-desktop.jpg')
        }

        &.destination {
            background-image: url('/assets/destination/background-destination-desktop.jpg')
        }

        &.crew {
            background-image: url('/assets/crew/background-crew-desktop.jpg')
        }

        &.technology {
            background-image: url('/assets/technology/background-technology-desktop.jpg')
        }
    }



`


const Wrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`
