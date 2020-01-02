import React from 'react'
import Img from 'gatsby-image'
import { css } from '@emotion/core'

class Record extends React.Component {
  state = {
    isRecordOpen: false,
  }

  handleOpenRecord = () => {
    const { isRecordOpen } = this.state
    this.setState({
      isRecordOpen: !isRecordOpen,
    })
    console.log(isRecordOpen)
  }

  render() {
    const { isRecordOpen } = this.state

    return (
      /** First let's create the record itself and give it a bit of 3D-ness */
      <div
        onClick={this.handleOpenRecord}
        onKeyPress={this.handleOpenRecord}
        role="button"
        tabIndex="0"
        aria-pressed="false"
        aria-label="Open Record"
        css={css`
          transform: perspective(0) rotateY(0);

          @media (min-width: 768px) {
            position: relative;
            transform: perspective(150px) rotateY(1deg) scale(1);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
              0 4px 6px -2px rgba(0, 0, 0, 0.05);
            transition: 50ms ease-in-out all;
            will-change: all;
            cursor: pointer;
          }

          &:focus {
            bottom: 1rem;
            outline: none;
          }

          &:hover {
            transform: scale(1);
            box-shadow: inherit;
            z-index: inherit;

            @media (min-width: 768px) {
              transform: perspective(0) rotateY(0deg) scale(1.1);
              box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
              z-index: 999;
            }

            & span {
              opacity: 0;
            }
          }
        `}
      >
        {/** Add a spine, adjust the perspective (weird number) and give it a muted colour */}
        <span
          css={css`
            display: none;

            @media (min-width: 768px) {
              display: block;
              position: absolute;
              top: 0;
              left: -11px;
              width: 15px;
              height: 100%;
              background: #555;
              transform: perspective(2170px) rotateY(-63deg);
              z-index: -1;
              transition: 50ms ease-in-out opacity;
            }
          `}
        ></span>

        {/** The album name */}
        <h2
          css={css`
            position: absolute;
            bottom: 1rem;
            right: 1rem;
            color: #fff;
            font-size: 0.875rem;
            z-index: 5;
          `}
        >
          <strong>Tracks of the Month</strong>
          <br />
          {this.props.playlistName}
        </h2>

        {/** Add a Spotify logo for legit-ness */}
        <h3
          css={css`
            position: absolute;
            top: 1rem;
            left: 1rem;
            width: 75px;
            z-index: 10;
          `}
        >
          <Img fluid={this.props.spotifyLogo} />
        </h3>
        <Img fluid={this.props.coverArt} />
      </div>
    )
  }
}

export default Record
