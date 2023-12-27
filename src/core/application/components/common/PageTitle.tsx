import styled from 'styled-components'
import { breakpoints } from '@/styles/breakpoints'

export default styled.h1`
    text-transform: uppercase;
    font-family: ${({ theme }) => theme.font.barlowCondensed};
    letter-spacing: 4.725px;
    color: ${({ theme }) => theme.color.white};
    font-size: ${({ theme }) => theme.size.subHeading3};

    & > span {
        opacity: 0.25;
        margin-right: 1.6rem;
    }

    @media ${breakpoints.laptop} {
        font-size: ${({ theme }) => theme.size.heading5};

        & > span {
            opacity: 0.25;
            margin-right: 2.8rem;
        }
    }
`
