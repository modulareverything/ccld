import React from 'react'
import Header from '../../components/header'
import Layout from '../../components/layout'
import Container from '../../components/container'
import tw from 'tailwind.macro'
import FadeIn from '../../components/microanimation/fadeIn'
import ToggleSpring from '../../components/microanimation/ToggleSpring'

const Microanimation = () => {
  return (
    <Layout>
      {/**
       * The main page header
       */}
      <Header pageTitle="Clippings / Microanimation" />

      {/**
       * The main content
       */}
      <section>
        <Container>
          <ul>
            <li css={tw`mb-4`}>
              <FadeIn />
            </li>
            <li css={tw`mb-4`}>
              <ToggleSpring />
            </li>
          </ul>
        </Container>
      </section>
    </Layout>
  )
}

export default Microanimation
