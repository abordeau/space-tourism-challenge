import React from 'react'
import styled from 'styled-components'
import { GetServerSideProps } from 'next'
import DestinationSelector from '@/core/application/components/destinations/DestinationSelector'
import { useRouter } from 'next/router'

export interface IDestinationPageProps {
  destination: {
    name: string,
    image: string
    info: string
    travelTime: string
    distance: string
  }
}

const DestinationPage: React.FC<IDestinationPageProps> = ({ destination }) => {
  const router = useRouter()
  const handleOnClick = async (value: string) => {
    await router.replace(`/destinations/${value}`)
  }

  return (
    <Container>
      <PageTitle>
        <span>01</span>Pick your destination
      </PageTitle>
      <Wrapper>
        <ImageWrapper>
          <img src={`/assets/destination/${destination.image}.webp`} />
        </ImageWrapper>
        <DestinationInformationSection>
          <DestinationSelector
            values={['moon', 'mars', 'titan', 'europa']}
            selectedValue={destination.name}
            onClick={handleOnClick}
          />
          <DestinationName>
            {destination.name}
          </DestinationName>
          <DestinationInfo>
            {destination.info}
          </DestinationInfo>
          <DestinationBottomRow>
            <DataColumn>
              <div className='label'>
                AVG. DISTANCE
              </div>
              <div className='value'>
                {destination.distance}
              </div>
            </DataColumn>
            <DataColumn>
              <div className='label'>
                Est. travel time
              </div>
              <div className='value'>
                {destination.travelTime}
              </div>
            </DataColumn>
          </DestinationBottomRow>
        </DestinationInformationSection>
      </Wrapper>
    </Container>
  )
}

export default DestinationPage

const Container = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 6.4rem;
    padding: 1rem 16.5rem;
`


const PageTitle = styled.h1`
    text-transform: uppercase;
    font-family: ${({ theme }) => theme.font.barlow};
    font-size: ${({ theme }) => theme.size.heading5};
    letter-spacing: 4.725px;
    color: ${({ theme }) => theme.color.white};

    & > span {
        opacity: 0.25;
        margin-right: 2.8rem;
    }
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const ImageWrapper = styled.div`

`

const DestinationInformationSection = styled.div`
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.color.white};
`

const DestinationName = styled.div`
    font-size: 10rem;
    text-transform: uppercase;
    margin-top: 3.7rem;
`

const DestinationInfo = styled.div`
    flex: 1;
    max-width: 44rem;
    color: ${({ theme }) => theme.color.secondary};
    font-family: ${({ theme }) => theme.font.barlow};
    line-height: 3.2rem;

`

const DestinationBottomRow = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 8rem;
    padding-top: 2.8rem;
`

const DataColumn = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1.2rem;
    text-transform: uppercase;

    & .label {
        color: ${({ theme }) => theme.color.secondary};
        font-size: ${({ theme }) => theme.size.subHeading2};
        font-family: ${({ theme }) => theme.font.barlow};
    }

    & .value {
        color: ${({ theme }) => theme.color.white};
        font-size: ${({ theme }) => theme.size.heading5};
    }

`

interface DestinationData {
  info: string
  image: string
  travelTime: string
  distance: string
}

export const getServerSideProps: GetServerSideProps<IDestinationPageProps> = async ({ query }) => {
  let destination: string = 'moon'
  if ('destination' in query && query.destination && Array.isArray(query.destination) === false) {
    destination = query.destination
  }

  const destinationData: { [id: string]: DestinationData } = {
    moon: {
      info: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
      distance: '384,400 km',
      travelTime: '3 days',
      image: 'image-moon'
    },
    mars: {
      info: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
      distance: '225 MIL. km',
      travelTime: '9 months',
      image: 'image-mars'
    },
    europa: {
      info: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
      distance: '628 MIL. km',
      travelTime: '3 years',
      image: 'image-europa'
    },
    titan: {
      info: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
      distance: '1.6 BIL. km',
      travelTime: '7 years',
      image: 'image-titan'
    }
  }

  const selectedDestinationData: DestinationData = destinationData[destination]

  return {
    props: {
      destination: {
        name: destination,
        ...selectedDestinationData
      }
    }
  }

}

