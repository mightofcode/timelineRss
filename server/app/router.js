'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  //const userExist = app.middleware.userExist();
  router.all('/api/hello', controller.hello.hello);
  router.all('/api/rss/timeline', controller.rss.timeline);
  router.all('/api/rss/get', controller.rss.timeline);
  router.all('/api/rss/read', controller.rss.read);
  router.all('/api/rss/add', controller.rss.add);
  router.all('/api/rss/remove', controller.rss.remove);
  router.all('/api/rss/list', controller.rss.rssList);

};
