import React, { Component } from 'react'
import Helmet from 'react-helmet'
import tw from 'tailwind.macro'
import { css } from '@emotion/core'

export class wavyBaseline extends Component {
  render() {
    return (
      <div>
        <pre css={tw`text-sm mb-2`}>wavyBaseline.js</pre>
        <div css={tw`bg-black`} onMouseOver={this.mouseOver}>
          <Helmet>
            <link
              href="https://fonts.googleapis.com/css?family=Gothic+A1:900"
              rel="stylesheet"
            />
          </Helmet>

          <svg viewBox="0 0 100 50" width="100%">
            <def>
              <path
                id="path"
                fill="none"
                stroke="red"
                d="M 0 40 C 30 10, 35 10, 45 40 S 200 0, 50 50"
              />
            </def>
            <text
              x="0"
              y="15"
              css={css`
                fill: white;
                text-transform: uppercase;
                font-family: 'Gothic A1', serif;
                font-size: 0.5rem;
              `}
            >
              <textPath href="#path" startOffset="12%">
                이것은 재미 있지만 정말 혼란 스럽다
              </textPath>
            </text>
          </svg>
        </div>
      </div>
    )
  }
}

export default wavyBaseline
