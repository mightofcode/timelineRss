'use strict';

// npm run dev DO NOT read this file

require('egg').startCluster({
    baseDir: __dirname,
    port: process.env.PORT || 7001,
    workers: 2,
    https: false, // nginx https
});
