import React from 'react';

import { createDevTools } from 'redux-devtools';

import ChartMonitor from 'redux-devtools-chart-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

const tooltipOptions = {
    disabled: false,
    offset: {left: 30, top: 10},
    indentationSize: 2,
    style: {
      'background-color': 'lightgrey',
      'opacity': '0.7',
      'border-radius': '5px',
      'padding': '5px'
    }
}

const DevTools = createDevTools(
  <DockMonitor
    toggleVisibilityKey="ctrl-h"
    changePositionKey="ctrl-q"
    defaultIsVisible={true}
  >
    <ChartMonitor
     theme='tomorrow'
     tooltipOptions={tooltipOptions}
    />
  </DockMonitor>
);

export default DevTools;
