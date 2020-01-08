import React from 'react'
import Header from '../../components/header'
import Layout from '../../components/layout'
import Container from '../../components/container'
import tw from 'tailwind.macro'

/** Import our animations */
import FadeIn from '../../components/microanimation/FadeIn'
import ToggleSpring from '../../components/microanimation/ToggleSpring'
import Curtains from '../../components/microanimation/Curtains'
import Mounting from '../../components/microanimation/Mounting'
import Gallery from '../../components/microanimation/Gallery'

const Microanimation = () => {
  return (
    <Layout>
      {/**
       * The main page header
       */}
      <Header pageTitle="Clippings / react-spring" />

      {/**
       * The main content
       */}
      <section>
        <Container>
          <p
            css={tw`
                text-sm
                mb-8
              `}
          >
            Playing around with physics-based animation.
          </p>

          <hr css={tw`mb-8`} />
          <ul>
            <li css={tw`mb-8`}>
              <FadeIn />
            </li>
            <li css={tw`mb-8`}>
              <ToggleSpring />
            </li>
            <li css={tw`mb-8`}>
              <Curtains />
            </li>
            <li css={tw`mb-8`}>
              <Mounting />
            </li>
            <li css={tw`mb-8`}>
              <Gallery />
            </li>
          </ul>
        </Container>
      </section>
    </Layout>
  )
}

export default Microanimation
