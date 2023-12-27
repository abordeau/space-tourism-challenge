import React, { useState } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { Routes } from '@/core/application/constants/routes'

const MobileHeader = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const handleOnClick = () => {
    setIsOpen(true)
  }

  return (
    <Container>
      <Wrapper>
        <AppLogo>
          <img src='/assets/svgs/appLogo.svg' />
        </AppLogo>
        <BurgerMenu type='button' onClick={handleOnClick}>
          <img src='/assets/svgs/burgerMenu.svg' />
        </BurgerMenu>
      </Wrapper>
      {isOpen && <MenuOverlay
        initial={{
          opacity: 0.5,
          x: '100%'
        }}
        animate={{
          opacity: 1,
          x: 0
        }}
        transition={{
          ease: 'easeOut',
          duration: 0.2
        }}
      >
        <CloseMenuButton type='button' onClick={() => setIsOpen(false)}>
          <img src='/assets/svgs/close.svg' />
        </CloseMenuButton>
        <MenuEntry
          href={Routes.HOME()} className={pathname === '/' ? 'active' : ''}
        >
          <span>00</span>Home
        </MenuEntry>
        <MenuEntry
          href={Routes.DESTINATION_PAGE('moon')}
          className={pathname.startsWith('/destinations') ? 'active' : ''}
        >
          <span>01</span>Destination
        </MenuEntry>
        <MenuEntry
          href={Routes.CREW_PAGE('douglas')}
          className={pathname.startsWith('/crew') ? 'active' : ''}
        >
          <span>02</span>Crew
        </MenuEntry>
        <MenuEntry
          href={Routes.DESTINATION_PAGE('moon')}
          className={pathname === '/technology' ? 'active' : ''}
        >
          <span>03</span>Technology
        </MenuEntry>
      </MenuOverlay>}
    </Container>
  )
}

export default MobileHeader


const Container = styled.header`
    display: flex;
    flex-direction: row;
    padding: 2.5rem;

    position: relative;

`

const Wrapper = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`

const AppLogo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
`


const BurgerMenu = styled.button`

`

const MenuOverlay = styled(motion.div)`
    position: fixed;
    z-index: 2;
    right: 0;
    top: 0;
    bottom: 0;
    left: 33vw;
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(40.8px);

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    padding: 3.3rem;
`

const CloseMenuButton = styled.button`
    margin-bottom: 6.5rem;
    align-self: flex-end;
`

const MenuEntry = styled(Link)`
    text-transform: uppercase;
    text-decoration: none;
    font-family: ${({ theme }) => theme.font.barlow};
    color: ${({ theme }) => theme.color.white};
    font-size: ${({ theme }) => theme.size.subHeading3};
    letter-spacing: 2.7px;

    & > span {
        margin-right: 1.1rem;
        font-weight: ${({ theme }) => theme.weight.bold};
    }

    &:not(:last-child) {
        margin-bottom: 3.2rem;
    }
`
