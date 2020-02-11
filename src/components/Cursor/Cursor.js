import React, { useState } from 'react';
import useEventListener from '@use-it/event-listener';
import { css } from '@emotion/core';

const MouseMonitor = () => {
  const [coords, setCoords] = useState([0, 0, 0, false]);
  useEventListener('mousemove', ({ clientX, clientY }) => {
    setCoords([clientX, clientY, 1, false]);
  });
  useEventListener('mouseout', ({ clientX, clientY }) => {
    setCoords([clientX, clientY, 0, false]);
  });
  // useEventListener('pointerover', ({ clientX, clientY, target }) => {
  //   const isAnchor = target.tagName === 'A';
  //   console.log(isAnchor);
  //   setCoords([clientX, clientY, 0, isAnchor]);
  // });
  return coords;
};

const Cursor = () => {
  const [x, y, opacity] = MouseMonitor();
  return (
    <div
      style={{
        top: `${y}px`,
        left: `${x}px`,
      }}
      css={css`
        opacity: ${opacity === 0 ? 0 : 1};
        position: absolute;
        width: 1rem;
        height: 1rem;
        border-radius: 1rem;
        background-color: var(--color-brand);
        pointer-events: none;
        z-index: 9999;
        transition: 250ms ease opacity transform;
      `}
    />
  );
};

export default Cursor;
