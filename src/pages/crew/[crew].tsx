import { GetServerSideProps, NextPage } from 'next'
import styled from 'styled-components'
import { breakpoints } from '@/styles/breakpoints'
import PageTitle from '@/core/application/components/common/PageTitle'
import React from 'react'
import DotSelector from '@/core/application/components/crew/DotSelector'
import { useRouter } from 'next/router'
import { Routes } from '@/core/application/constants/routes'
import { AnimatePresence, motion } from 'framer-motion'


export interface ICrewPageProps {
  crew: {
    slug: string
    role: string
    name: string
    info: string
    image: string
  }
}

const CrewPage: NextPage<ICrewPageProps> = ({ crew }) => {
  const router = useRouter()
  const handleOnClick = async (value: string) => {
    const nextRoute = Routes.CREW_PAGE(value)
    await router.replace(nextRoute)
  }
  return (
    <Container>
      <Wrapper>
        <PageTitle>
          <span>02</span>Meet your crew
        </PageTitle>
        <AnimatePresence mode='wait'>
          <CrewDataWrapper
            key={crew.slug}
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 200, opacity: 0 }}
            transition={{
              ease: 'easeOut',
              duration: 0.5
            }}
          >
            <RoleWrapper>
              {crew.role}
            </RoleWrapper>
            <NameWrapper>
              {crew.name}
            </NameWrapper>
            <InfoWrapper>
              {crew.info}
            </InfoWrapper>
          </CrewDataWrapper>
        </AnimatePresence>
        <DotSelector
          values={['douglas', 'mark', 'victor', 'anousheh']}
          selectedValue={crew.slug}
          onClick={handleOnClick}
        />
      </Wrapper>
      <ImageWrapper
        key={crew.slug}
        initial={{
          opacity: 0.5,
          scale: 0.9
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
        <img src={`/assets/crew/${crew.image}.webp`} />
      </ImageWrapper>
    </Container>
  )
}

export default CrewPage

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    row-gap: 3rem;
    padding: 2.5rem;

    height: 100%;

    border: 1px solid green;

    @media ${breakpoints.tablet} {
        border: 1px solid orange;
    }

    @media ${breakpoints.laptop} {

        border: 1px solid blue;
        row-gap: 6.4rem;
        padding: 6.2rem 16.5rem 0 16.5rem;
        align-items: stretch;
        flex-direction: row;
        height: 100%;
    }
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 8rem;
    align-items: center;

    @media ${breakpoints.laptop} {
        align-items: flex-start;
    }
`

const CrewDataWrapper = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media ${breakpoints.laptop} {
        align-items: flex-start;
    }
`
const RoleWrapper = styled.div`
    font-size: ${({ theme }) => theme.size.heading4};
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.5);
    margin-bottom: 1.5rem;

`
const NameWrapper = styled.div`
    font-size: ${({ theme }) => theme.size.heading3};
    text-transform: uppercase;
    color: ${({ theme }) => theme.color.white};
    margin-bottom: 2.7rem;

`
const InfoWrapper = styled.div`
    font-family: ${({ theme }) => theme.font.barlow};
    font-size: ${({ theme }) => theme.size.text};
    line-height: 3.2rem;
    max-width: 44rem;
    text-align: center;

    @media ${breakpoints.laptop} {
        text-align: left;
    }
`

const ImageWrapper = styled(motion.div)`
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    @media ${breakpoints.laptop} {
        img {
            height: 55rem;
        }
    }

`


interface CrewData {
  role: string
  name: string
  info: string
  image: string
}

export const getServerSideProps: GetServerSideProps<ICrewPageProps> = async ({ query }) => {
  let slug: string = 'douglas'
  if ('crew' in query && query.crew && Array.isArray(query.crew) === false) {
    slug = query.crew
  }

  const crewData: { [id: string]: CrewData } = {
    douglas: {
      name: 'Douglas Hurley',
      role: 'commander',
      info: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
      image: 'image-douglas-hurley'
    },
    mark: {
      name: 'mark shuttleworth',
      role: 'Mission Specialist',
      info: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
      image: 'image-mark-shuttleworth'
    },
    victor: {
      name: 'victor glover',
      role: 'pilot',
      info: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.',
      image: 'image-victor-glover'
    },
    anousheh: {
      name: 'Anousheh Ansari',
      role: 'Flight Engineer',
      info: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
      image: 'image-anousheh-ansari'
    }
  }

  const selectedCrewData: CrewData = crewData[slug]

  return {
    props: {
      crew: {
        ...selectedCrewData,
        slug
      }
    }
  }
}
