'use strict';

const {dbGet, dbAll, dbRun} =require("../service/db");

const Controller = require('egg').Controller;
const md5 = require('md5');
const dayjs = require('dayjs');
const BaseController = require('./base');

class RssController extends BaseController {
    async timeline({}) {

        this.success("hello world");
    }

    async read({}) {
        console.log("hello1");
        this.success("hello world");
    }

    async add({}) {
        const {ctx, app} = this;
        const {rss} = ctx.request.body;
        if(!rss){
            this.error("params error");
        }
        const row = await dbGet(`select * from rss where url='${rss}' limit 1`);
        if (!row) {
            await dbRun(`insert into rss (url) values ('${rss}')`);
        }
        this.success("OK");
    }
    async remove({}) {
        const {ctx, app} = this;
        const {rss} = ctx.request.body;
        if(!rss){
            this.error("params error");
        }
        await dbRun(`delete from rss where url='${rss}'`);
        this.success("OK");
    }
}

module.exports = RssController;