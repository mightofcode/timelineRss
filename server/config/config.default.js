/* eslint valid-jsdoc: "off" */

'use strict';
const path = require('path');

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1575812978932_7706';

  // add your middleware config here
  config.middleware = ['httpLog'];
  //config.middleware = [];
  config.httpLog = {
    type: 'all'
  };

  config.allowHosts = ['localhost:8000', '127.0.0.1:8000', '47.243.103.58:8000', '47.243.103.58'];

  config.interfaceLimit = {
    maxCount: 30, // 最多请求个数
    time: 3 * 1000, // 间隔时间
  };

  config.interfaceCache = {
    expire: 10,
    include: ['/api/user/detail']
  };

  config.security = {
    csrf: {
      enable: false,
    },
  };

  config.view = {
    mapping: {
      ".html": "ejs"
    },
    root: [
      path.join(appInfo.baseDir, "app/html"),
      path.join(appInfo.baseDir, "app/view")
    ].join(",")
  };

  config.ejs = {
    delimiter: "%"
  };

  config.static = {
    prefix: "/assets/",
    dir: path.join(appInfo.baseDir, "app/assets")
  };

  config.session = {
    key: "MUKE_SESS",
    httpOnly: true,
    maxAge: 1000 * 5,
    renew: true
  };

  config.auth = {
    exclude: ['/api/user/login', '/api/user/register']
  };

  config.jwt = {
    secret: '123456'
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    salt: 'muke',
    redisExpire: 60 * 60 * 24
  };

  return {
    ...config,
    ...userConfig,
  };
};
