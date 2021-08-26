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
        "path": "/add/addRssPanel/addRssContent",
        "exact": true,
        "component": require('@/pages/add/addRssPanel/addRssContent/index.js').default
      },
      {
        "path": "/add/addRssPanel",
        "exact": true,
        "component": require('@/pages/add/addRssPanel/index.js').default
      },
      {
        "path": "/add",
        "exact": true,
        "component": require('@/pages/add/index.js').default
      },
      {
        "path": "/home3",
        "exact": true,
        "component": require('@/pages/home3/index.js').default
      },
      {
        "path": "/",
        "exact": true,
        "component": require('@/pages/index.js').default
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
