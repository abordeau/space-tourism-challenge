import React from 'react'
import styled from 'styled-components'
import { GetServerSideProps, NextPage } from 'next'
import DestinationSelector from '@/core/application/components/destinations/DestinationSelector'
import { useRouter } from 'next/router'
import { AnimatePresence, motion } from 'framer-motion'
import { breakpoints } from '@/styles/breakpoints'
import { Routes } from '@/core/application/constants/routes'
import PageTitle from '@/core/application/components/common/PageTitle'

export interface IDestinationPageProps {
  destination: {
    name: string,
    image: string
    info: string
    travelTime: string
    distance: string
  }
}

const DestinationPage: NextPage<IDestinationPageProps> = ({ destination }) => {
  const router = useRouter()
  const handleOnClick = async (value: string) => {
    const nextRoute = Routes.DESTINATION_PAGE(value)
    await router.replace(nextRoute)
  }

  return (
    <Container>
      <PageTitle>
        <span>01</span>Pick your destination
      </PageTitle>
      <Wrapper>
        <ImageWrapper
          key={destination.name}
          initial={{
            opacity: 0.6,
            scale: 0.8
          }}
          animate={{
            opacity: 1,
            scale: 1
          }}
          transition={{
            ease: 'easeOut',
            duration: 0.5
          }}
        >
          <img src={`/assets/destination/${destination.image}.webp`} />
        </ImageWrapper>
        <DestinationDataSection>
          <DestinationSelector
            values={['moon', 'mars', 'titan', 'europa']}
            selectedValue={destination.name}
            onClick={handleOnClick}
          />
          <AnimatePresence mode='wait'>
            <DestinationDataWrapper
              key={destination.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                ease: 'easeOut',
                duration: 0.5
              }}>
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
            </DestinationDataWrapper>
          </AnimatePresence>
        </DestinationDataSection>
      </Wrapper>
    </Container>
  )
}

export default DestinationPage

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 3rem;
    padding: 2.5rem;
    
    @media ${breakpoints.laptop} {
        row-gap: 6.4rem;
        padding: 7.6rem 16.5rem 5rem 16.5rem;
        align-items: flex-start;
    }
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 3.5rem;
    justify-content: space-between;
    width: 100%;

    @media ${breakpoints.laptop} {
        flex-direction: row;
    }
`

const ImageWrapper = styled(motion.div)`
    margin: auto;
    width: 17rem;
    height: 17rem;

    @media ${breakpoints.laptop} {
        width: 40rem;
        height: 40rem;
    }
`

const DestinationDataSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${({ theme }) => theme.color.white};

    @media ${breakpoints.laptop} {
        align-items: flex-start;
    }
`

const DestinationDataWrapper = styled(motion.div)`
    display: flex;
    flex-direction: column;
`

const DestinationName = styled.div`
    font-size: 5.6rem;
    text-transform: uppercase;
    margin-top: 2rem;

    @media ${breakpoints.laptop} {
        font-size: 10rem;
        margin-top: 3.7rem;
    }
`

const DestinationInfo = styled.div`
    flex: 1;
    max-width: 44rem;
    color: ${({ theme }) => theme.color.secondary};
    font-family: ${({ theme }) => theme.font.barlow};
    font-size: 1.5rem;
    line-height: 2.5rem;
    text-align: center;

    @media ${breakpoints.laptop} {
        line-height: 3.2rem;
        text-align: left;
        font-size: ${({ theme }) => theme.size.text};
    }

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

