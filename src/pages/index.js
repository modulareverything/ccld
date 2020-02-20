import React from 'react';

import Cursor from '../components/Cursor';
import Layout from '../components/Layout';
import Container from '../components/Container';
import Title from '../components/Title';
import RichText from '../components/RichText';
import Social from '../components/Social';
import Card from '../components/Card';
import Grid from '../components/Grid';

// ============================================================================

export default () => (
  <Layout>
    <Container>
      <Title is="Hey, I'm Chrish Dunne 👋🏻" />
      <RichText>
        I&apos;m a freelance UI/UX Designer and front-end web developer. I
        previously worked at Sky Bet, leading on their Design System project,
        with a support role in many others.
      </RichText>
      <Social />

      <Grid>
        <Card />
        <Card />
        <Card />
      </Grid>
    </Container>
    <Cursor />
  </Layout>
);
