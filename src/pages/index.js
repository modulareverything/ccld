import React from 'react';

import Layout from '../components/Layout';
import Container from '../components/Container';
import Title from '../components/Title';
import RichText from '../components/RichText';
// import Social from '../components/Social';

// ============================================================================

export default () => (
  <Layout>
    <Container>
      <Title is="Chrish Dunne" />
      <RichText>
        The clean-up function runs before the component is removed from the UI
        to prevent memory leaks. Additionally, if a component renders multiple
        times (as they typically do), the previous effect is cleaned up before
        executing the next effect. In our example, this means a new subscription
        is created on every update. To avoid firing an effect on every update,
        refer to the next section.
      </RichText>

      <Title is="etc" />
      <RichText>
        The clean-up function runs before the component is removed from the UI
        to prevent memory leaks. Additionally, if a component renders multiple
        times (as they typically do), the previous effect is cleaned up before
        executing the next effect. In our example, this means a new subscription
        is created on every update. To avoid firing an effect on every update,
        refer to the next section.
      </RichText>
    </Container>
  </Layout>
);
