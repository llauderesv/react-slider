import React from 'react';

import './index.scss';

export default function SeekBar({
  clientX,
  startDragging,
  handleOnDragging,
  handleStartDragging,
  handleOnDragEnd,
}) {
  const seekBarStyle = {
    left: clientX,
    boxShadow: `${startDragging ? '0px 0px 3px 9px #5a7cff52' : ''}`,
  };

  return (
    <div
      style={seekBarStyle}
      className="seek-bar"
      draggable="true"
      onDrag={event => handleOnDragging(event)}
      onDragStart={event => handleStartDragging(event)}
      onDragEnd={event => handleOnDragEnd(event)}
    />
  );
}
