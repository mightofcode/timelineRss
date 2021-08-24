'use strict';

const Controller = require('egg').Controller;
const md5 = require('md5');
const dayjs = require('dayjs');
const BaseController = require('./base');

class HelloController extends BaseController {
  async hello({ }) {
    return "hello world";
  }
}

module.exports = UserController;
