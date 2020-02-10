import React, { useState } from 'react';
import { css } from '@emotion/core';

// window.onload = function windowLoad() {
//   this.addEventListener('mousemove', mouseMonitor);
// };

const Cursor = () => {
  const [mouseY, setMouseY] = useState(0);
  const [mouseX, setMouseX] = useState(0);

  document.onmousemove = function mousePos(e) {
    const setMouseX = e.screenX;
    const setMouseY = e.clientY;
  };

  return (
    <div
      css={css`
        position: absolute;
        /* left: ${this.mouseX}px; */
        /* top: ${mouseMonitor.y}px; */
      `}
    >
      Cursor
    </div>
  );
};

export default Cursor;
