import React from 'react'
import styled from 'styled-components'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Routes } from '@/core/application/constants/routes'
import { useRouter } from 'next/router'

const Header = () => {
  const { asPath: pathname } = useRouter()
  return (
    <Container>
      <AppLogo>
        <img src='/assets/svgs/appLogo.svg' />
      </AppLogo>
      <Line />
      <MenuWrapper>
        <MenuEntry href={Routes.HOME()} className={pathname === '/' ? 'active' : ''}>
          <span>00</span>Home
        </MenuEntry>
        <MenuEntry
          href={Routes.DESTINATION_PAGE('moon')}
          className={pathname.startsWith('/destination') ? 'active' : ''}
        >
          <span>01</span>Destination
        </MenuEntry>
        <MenuEntry
          href={Routes.CREW_PAGE('douglas')}
          className={pathname.startsWith('/crew') ? 'active' : ''}
        >
          <span>02</span>Crew
        </MenuEntry>
        <MenuEntry href='/destinations/moon' className={pathname === '/technology' ? 'active' : ''}>
          <span>03</span>Technology
        </MenuEntry>
      </MenuWrapper>
    </Container>
  )
}

export default Header


const Container = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 4rem;
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
    backdrop-filter: blur(40.8px);
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
