import React from 'react'
import Layout from '../components/layout'
import Header from '../components/header'
import Container from '../components/container'
import tw from 'tailwind.macro'
import styled from '@emotion/styled'

export default () => {
  /**
   * Function to pick a random colour from an array
   */
  const colour = [
    'tomato',
    'MediumSeaGreen',
    'MediumPurple',
    'LightSeaGreen',
    'DodgerBlue',
  ]
  const rand = Math.floor(Math.random() * colour.length)
  console.log(rand)

  /**
   * Styling for the description of what I do
   */
  const WhoAmI = styled.h1`
    ${tw`
    text-2xl
    flex
    flex-col
    justify-center
    sm:w-8/12
    md:w-7/12
    lg:w-6/12
  `}
    color: ${colour[rand]};
    height: calc(100vh - 56px);
    
  `

  return (
    <Layout>
      <Header />
      <section>
        <Container>
          <WhoAmI>
            Designer / developer currently UI/UX Designer at Sky Betting &amp;
            Gaming.
          </WhoAmI>
        </Container>
      </section>
    </Layout>
  )
}
