import React from 'react';

import Layout from '../components/Layout';
import Container from '../components/Container';
import Title from '../components/Title';
import RichText from '../components/RichText';
import Social from '../components/Social';

// ============================================================================

export default () => (
  <Layout>
    <Container>
      <Title is="Hey, I'm Chrish Dunne 👋🏻" />
      <RichText>
        I&apos;m a UI/UX Designer and front-end web developer specialising in
        React. I currently work for Sky Betting &amp; Gaming but I&apos;m
        setting up as a freelance contractor and will be available for work from
        March 2020.
      </RichText>
      <Social />
    </Container>
  </Layout>
);
