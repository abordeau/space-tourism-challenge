import styled from 'styled-components'
import { NextPage } from 'next'
import Link from 'next/link'
import { breakpoints } from '@/styles/breakpoints'
import { Routes } from '@/core/application/constants/routes'

const Home: NextPage = () => {
  return (
    <Container>
      <Wrapper>
        <TextWrapper>
          <Intro>
            so, you want to travel to
          </Intro>
          <Title>
            space
          </Title>
          <Content>
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind
            of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
          </Content>
        </TextWrapper>
        <ExploreButton href={Routes.DESTINATION_PAGE('moon')}>
          Explore
        </ExploreButton>
      </Wrapper>
    </Container>
  )
}

export default Home


const Container = styled.div`
    flex: 1;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    padding: 0 2rem;

    @media ${breakpoints.laptop} {
        padding: 0rem 16.5rem 13rem 16.5rem;
        justify-content: flex-end;
    }

`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 8rem;

    @media ${breakpoints.laptop} {
        flex-direction: row;
        justify-content: space-between;
    }
`

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1.6rem;
    justify-content: center;
    align-items: center;

    @media ${breakpoints.laptop} {
        row-gap: 2.4rem;
        justify-content: unset;
        align-items: unset;
        max-width: 44.4rem;
    }
`


const Intro = styled.div`
    text-transform: uppercase;
    font-family: ${({ theme }) => theme.font.barlow};
    font-size: ${({ theme }) => theme.size.subHeading3};


    @media ${breakpoints.laptop} {
        font-size: ${({ theme }) => theme.size.heading5};
        letter-spacing: 0.4rem;
    }

`


const Title = styled.div`
    text-transform: uppercase;
    color: ${({ theme }) => theme.color.white};
    font-size: 8rem;
    line-height: 10rem;

    @media ${breakpoints.laptop} {
        font-size: 15rem;
        line-height: normal;
    }

`

const Content = styled.div`
    font-family: ${({ theme }) => theme.font.barlow};
    font-size: 1.5rem;
    line-height: 2.5rem;

    @media ${breakpoints.laptop} {
        font-size: ${({ theme }) => theme.size.text};
        line-height: 32px;
    }
`


const ExploreButton = styled(Link)`
    flex-shrink: 0;
    width: 15rem;
    height: 15rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.color.white};
    border-radius: 50%;
    padding: 2.7rem;
    text-decoration: none;
    cursor: pointer;
    color: ${({ theme }) => theme.color.primary};
    text-transform: uppercase;
    transition: all 200ms ease-out;


    @media ${breakpoints.laptop} {
        width: 27.4rem;
        height: 27.4rem;
        padding: 6.2rem;
        font-size: ${({ theme }) => theme.size.heading4};

        outline-width: 8.8rem;
        outline-style: solid;;
        outline-color: rgba(255, 255, 255, 0);

        &:hover {
            outline-color: rgba(255, 255, 255, 0.1);
        }

    }



`
