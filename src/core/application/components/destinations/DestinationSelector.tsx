import { breakpoints } from '@/styles/breakpoints'
import React from 'react'
import styled from 'styled-components'

export interface IDestinationSelectorProps {
  values: Array<string>
  selectedValue: string
  onClick: (value: string) => void
}

const DestinationSelector: React.FC<IDestinationSelectorProps> = ({ values, selectedValue, onClick }) => {
  return (
    <Container>
      {values.map(it => (
        <Entry key={it} onClick={() => onClick(it)} className={it === selectedValue ? 'selected' : ''}>
          {it}
        </Entry>
      ))}
    </Container>
  )
}

export default DestinationSelector


const Container = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 2.6rem;

    @media ${breakpoints.laptop} {
        column-gap: 3.5rem;
    }

`

const Entry = styled.div`
    font-family: ${({ theme }) => theme.font.barlow};
    font-size: ${({ theme }) => theme.size.subHeading3};
    text-transform: uppercase;
    color: ${({ theme }) => theme.color.secondary};
    padding-bottom: 1.2rem;
    letter-spacing: 2.7px;
    border-bottom-style: solid;
    border-bottom-width: 3px;
    border-color: transparent;
    min-width: 4rem;

    cursor: pointer;
    transition: all 200ms ease-out;

    &.selected {
        border-color: ${({ theme }) => theme.color.white};
        color: ${({ theme }) => theme.color.white};
    }

    &:hover {
        color: ${({ theme }) => theme.color.white};
    }
`
