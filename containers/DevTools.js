import React from 'react';

import { createDevTools } from 'redux-devtools';

import ChartMonitor from 'redux-devtools-chart-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

const DevTools = createDevTools(
  <DockMonitor
    toggleVisibilityKey="ctrl-h"
    changePositionKey="ctrl-q"
    defaultIsVisible={true}
  >
    <ChartMonitor theme='tomorrow'/>
  </DockMonitor>
);

export default DevTools;
