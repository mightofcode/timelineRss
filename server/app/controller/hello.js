'use strict';

const Controller = require('egg').Controller;
const md5 = require('md5');
const dayjs = require('dayjs');
const BaseController = require('./base');

class HelloController extends BaseController {
  async hello({ }) {
    console.log("hello");
    this.success("hello world");
  }
}

module.exports = HelloController;