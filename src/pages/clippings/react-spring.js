import React from 'react'
import Header from '../../components/header'
import Layout from '../../components/layout'
import Container from '../../components/container'
import tw from 'tailwind.macro'

/** Import our animations */
import FadeIn from '../../components/spring/FadeIn'
import ToggleSpring from '../../components/spring/ToggleSpring'
import Curtains from '../../components/spring/Curtains'
import Mounting from '../../components/spring/Mounting'
import Modal from '../../components/spring/Modal'

const Spring = () => {
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
              <pre css={tw`text-sm mb-2`}>FadeIn.js</pre>
              <FadeIn />
            </li>
            <li css={tw`mb-8`}>
              <pre css={tw`text-sm mb-2`}>ToggleSpring.js</pre>
              <ToggleSpring />
            </li>
            <li css={tw`mb-8`}>
              <pre css={tw`text-sm mb-2`}>Curtains.js</pre>
              <Curtains />
            </li>
            <li css={tw`mb-8`}>
              <pre css={tw`text-sm mb-2`}>Mounting.js</pre>
              <Mounting />
            </li>
            <li css={tw`mb-8`}>
              <pre css={tw`text-sm mb-2`}>Modal.js</pre>
              <Modal />
            </li>
          </ul>
        </Container>
      </section>
    </Layout>
  )
}

export default Spring
