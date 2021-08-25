// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/root/timelineRss/client/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": require('@/layouts/index.js').default,
    "routes": [
      {
        "path": "/home",
        "exact": true,
        "component": require('@/pages/home/index.js').default
      },
      {
        "path": "/home3",
        "exact": true,
        "component": require('@/pages/home3/index.js').default
      }
    ]
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
