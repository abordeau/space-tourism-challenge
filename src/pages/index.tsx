import styled from 'styled-components'
import { NextPage } from 'next'
import Link from 'next/link'

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
        <ExploreButton href='/destinations'>
          Explore
        </ExploreButton>
      </Wrapper>
    </Container>
  )
}

export default Home


const Container = styled.div`
    flex: 1;
    padding: 25rem 16.5rem 0 16.5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;
    //background-image: url('/assets/home/background-home-desktop.jpg')

`

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 2.4rem;
    max-width: 44.4rem;
`


const Intro = styled.div`
    text-transform: uppercase;
    letter-spacing: 0.4rem;
    font-size: ${({ theme }) => theme.size.heading5};
    font-family: ${({ theme }) => theme.font.barlow};
`


const Title = styled.div`
    text-transform: uppercase;
    font-size: 15rem;
    color: ${({ theme }) => theme.color.white};

`

const Content = styled.div`
    line-height: 32px;
    font-family: ${({ theme }) => theme.font.barlow};
`


const ExploreButton = styled(Link)`
    flex-shrink: 0;
    width: 27.4rem;
    height: 27.4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.color.white};
    border-radius: 50%;
    padding: 6.2rem;
    text-decoration: none;
    
    cursor: pointer;

    color: ${({ theme }) => theme.color.primary};
    font-size: ${({ theme }) => theme.size.heading4};
    text-transform: uppercase;
    transition: all 200ms ease-out;
    outline-width: 8.8rem;
    outline-style: solid;;
    outline-color: rgba(255, 255, 255, 0);

    &:hover {
        outline-color: rgba(255, 255, 255, 0.1);
    }

`
