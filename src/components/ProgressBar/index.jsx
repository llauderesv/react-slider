import React from 'react';

import './index.scss';

export default React.forwardRef((props, refs) => {
  return (
    <div className="progress-bar" ref={refs}>
      <div
        style={{ width: `${props.fillValue}%` }}
        className="progress-bar-amount"
      >
        {props.children}
      </div>
    </div>
  );
});
