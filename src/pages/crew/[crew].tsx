import { NextPage } from 'next'
import DestinationPage from '@/pages/destination/[destination]'
import styled from 'styled-components'
import { breakpoints } from '@/styles/breakpoints'
import PageTitle from '@/core/application/components/common/PageTitle'
import React from 'react'


const CrewPage: NextPage = () => {

  return (
    <Container>
      <PageTitle>
        <span>02</span>Meet your crew
      </PageTitle>
    </Container>
  )
}

export default CrewPage

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
