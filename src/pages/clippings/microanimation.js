import React from 'react'
import Header from '../../components/header'
import Layout from '../../components/layout'
import Container from '../../components/container'
import tw from 'tailwind.macro'
import FadeIn from '../../components/microanimation/fadeIn'
import ToggleSpring from '../../components/microanimation/toggleSpring'
import Curtains from '../../components/microanimation/curtains'
import Mounting from '../../components/microanimation/mounting'

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
            <li>
              <Mounting />
            </li>
          </ul>
        </Container>
      </section>
    </Layout>
  )
}

export default Microanimation
