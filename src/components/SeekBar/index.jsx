import React from 'react';

import './index.scss';

const SeekBar = ({
  clientX,
  startDragging,
  handleOnDragging,
  handleStartDragging,
  handleOnDragEnd,
}) => {
  return (
    <div
      className="seek-bar"
      draggable="true"
      onDrag={event => {
        handleOnDragging(event);
      }}
      onDragStart={event => handleStartDragging(event)}
      onDragEnd={event => handleOnDragEnd(event)}
      style={{
        left: clientX,
        boxShadow: `${startDragging ? '0px 0px 3px 9px #5a7cff52' : ''}`,
      }}
    />
  );
};

export default SeekBar;
