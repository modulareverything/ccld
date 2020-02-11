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
  const [x, y, o] = MouseMonitor();
  return (
    <div
      style={{
        top: `${y - 6}px`,
        left: `${x - 6}px`,
        opacity: `${o === 0 ? 0 : 1}`,
      }}
      css={css`
        position: absolute;
        width: 0.5rem;
        height: 0.5rem;
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
