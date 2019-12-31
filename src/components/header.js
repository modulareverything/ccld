import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import tw from 'tailwind.macro'
import Container from '../components/container'

const Header = props => {
  /**
   * Add some styling to the header
   */
  const PageHeader = styled.header`
    ${tw`py-4`}
  `
  /**
   * Let's construct the navigation
   */
  const TopNavigation = styled.ul`
    ${tw`
      flex flex-row
    `}

    & li a:hover {
      ${tw`underline`}
    }

    & li {
      ${tw`mr-1`}

      &::after {
        content: ',';
      }

      &:last-of-type {
        ${tw`mr-0`}

        &::after {
          content: '';
        }
      }
    }
  `

  /**
   * Now let's render this out
   */
  return (
    <PageHeader>
      <Container isFlex={true}>
        {/** First let's render the site name */}
        <h1>
          <Link to="/">{props.siteTitle}</Link>
        </h1>

        {/** Now let's create the navigation using our styled-component above */}
        <nav aria-label="Main Navigation">
          <TopNavigation>
            <li>
              <span
                css={css`
                  text-decoration: line-through;
                  cursor: not-allowed;
                `}
              >
                Work
              </span>
            </li>
            <li>
              <Link to="/spotify-2019">Spotify 2019</Link>
            </li>
            <li>
              <a href="https://twitter.com/__ccld" target="_blank">
                Twitter
              </a>
            </li>
          </TopNavigation>
        </nav>
      </Container>
    </PageHeader>
  )
}

export default Header
