import React from 'react'
import styled from 'styled-components'
import { breakpoints } from '@/styles/breakpoints'


export interface IDotSelectorProps {
  values: Array<string>
  selectedValue: string
  onClick: (value: string) => void
}

const DotSelector: React.FC<IDotSelectorProps> = ({ values, selectedValue, onClick }) => {
  return (
    <Container>
      {values.map(it => (
        <Entry key={it} onClick={() => onClick(it)} className={it === selectedValue ? 'selected' : ''}>
        </Entry>
      ))}
    </Container>
  )
}

export default DotSelector


const Container = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 2.6rem;

    @media ${breakpoints.laptop} {
        column-gap: 3.5rem;
    }

`


const Entry = styled.div`
    width: 1.5rem;
    height: 1.5rem;

    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.175);
    transition: all 200ms ease-out;

    &.selected {
        background-color: ${({ theme }) => theme.color.white};
    }

    &:hover {
        background-color: rgba(255, 255, 255, 0.5);

    }
`
