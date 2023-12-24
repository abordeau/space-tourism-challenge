import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export interface ILayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  const pathname = usePathname()
  const getCurrentStep = (path: string): string => {
    let step
    if (pathname.startsWith('/destinations')) {
      step = 'destination'
    } else if (pathname.startsWith('/crews')) {
      step = 'crew'
    } else if (pathname.startsWith('/technologies')) {
      step = 'technology'
    } else {
      step = 'home'
    }

    return step
  }
  return (
    <Container className={`${getCurrentStep(pathname)}`}>
      <Header>
        <AppLogo>
          <img src='/assets/svgs/appLogo.svg' />
        </AppLogo>
        <Line />
        <MenuWrapper>
          <MenuEntry href='/' className={pathname === '/' ? 'active' : ''}>
            <span>00</span>Home
          </MenuEntry>
          <MenuEntry href='/destinations/moon' className={pathname.startsWith('/destinations') ? 'active' : ''}>
            <span>01</span>Destination
          </MenuEntry>
          <MenuEntry href='/destinations/moon' className={pathname === '/crews' ? 'active' : ''}>
            <span>02</span>Crew
          </MenuEntry>
          <MenuEntry href='/destinations/moon' className={pathname === '/technology' ? 'active' : ''}>
            <span>03</span>Technology
          </MenuEntry>
        </MenuWrapper>
      </Header>
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

`


const Header = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 4.2rem;
    padding-left: 5.5rem;
`

const AppLogo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
`

const Line = styled.div`
    width: 100%;
    height: 2px;
    background-color: rgba(255, 255, 255, 0.25);
    transform: translateX(6rem);
    z-index: 1;
`

const MenuWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    column-gap: 4.8rem;
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(40.78px);
    padding: 3.8rem 16.7rem 0 12.3rem;
`

const MenuEntry = styled(Link)`
    text-transform: uppercase;
    text-decoration: none;
    font-family: ${({ theme }) => theme.font.barlow};
    color: ${({ theme }) => theme.color.white};
    letter-spacing: 2.7px;
    border-bottom-style: solid;
    border-bottom-width: 3px;
    padding-bottom: 3.5rem;

    transition: all 200ms ease-out;

    & > span {
        margin-right: 1.1rem;
        font-weight: ${({ theme }) => theme.weight.bold};
    }

    border-color: transparent;

    &.active {
        border-color: ${({ theme }) => theme.color.white};
    }

    &:hover {
        border-color: rgba(255, 255, 255, 0.5)
    }

`


const Wrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`
