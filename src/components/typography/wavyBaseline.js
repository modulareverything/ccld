import React from 'react'
import Helmet from 'react-helmet'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import tw from 'tailwind.macro'

const TextBox = styled.svg`
  width: 100%;
`

const WavyBaseline = () => (
  <div>
    <pre css={tw`text-sm mb-2`}>wavyBaseline.js</pre>
    <div css={tw`bg-black`}>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Gothic+A1:900"
          rel="stylesheet"
        />
      </Helmet>

      <TextBox viewBox="0 0 56 18">
        <text
          x="0"
          y="15"
          css={css`
            fill: white;
            text-transform: uppercase;
            font-family: 'Gothic A1', serif;
          `}
        >
          관박쥐
        </text>
      </TextBox>
    </div>
  </div>
)

export default WavyBaseline
