'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app;
    const userExist = app.middleware.userExist();
    router.post('/api/hello', controller.hello.hello);
};
