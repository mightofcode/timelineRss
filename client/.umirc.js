import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  mock: false,
  proxy: {
    '/api': {
      'target': 'http://127.0.0.1:7001/',
      'changeOrigin': true
    }
  },
  history: {
    type: 'hash'
  },
  // routes: [
  //   // {
  //   //   path: '/',
  //   //   component: '@/layouts/index',
  //   //   routes: [
  //   //     {
  //   //       path: '/a',
  //   //       component: './home3/index',
  //   //       title: '首页'
  //   //     },
  //   //     {
  //   //       path: '/home21',
  //   //       component: './home/index',
  //   //       title: '首页2'
  //   //     }
  //   //   ]
  //   // }
  //   {
  //     path: '/',
  //     component: '@/layouts/index',
  //     routes: [
  //       { path: '/a', component: 'home3' },
  //       { path: '/b', component: 'home3' },
  //     ],
  //   },
  // ],
});
