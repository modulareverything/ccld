import React from 'react'
import tw from 'tailwind.macro'
import Header from '../../components/header'
import Layout from '../../components/layout'
import Container from '../../components/container'
import WavyBaseline from '../../components/typography/wavyBaseline'

class Typography extends React.Component {
  render() {
    return (
      <Layout>
        {/**
         * The main page header
         */}
        <Header pageTitle="Clippings / Typography" />

        {/**
         * The main content
         */}
        <section>
          <Container>
            <h1
              css={tw`
                text-xl
                mt-4
                mb-4
              `}
            >
              Typography
            </h1>
            <p
              css={tw`
                text-sm
                mb-8
              `}
            >
              A few typography experiments.
            </p>

            <hr css={tw`mb-8`} />

            <WavyBaseline />
          </Container>
        </section>
      </Layout>
    )
  }
}

export default Typography
