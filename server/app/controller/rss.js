'use strict';

const {dbGet, dbAll, dbRun} = require("../service/db");

const Controller = require('egg').Controller;
const md5 = require('md5');
const dayjs = require('dayjs');
const BaseController = require('./base');
const SqlString = require('sqlstring');


class RssController extends BaseController {
    async timeline({}) {
        const articles = await dbAll(`select * from article where readed==0 order by pubTime desc`);
        this.success({articles});
    }

    async read({}) {
        console.log("hello1");
        const {ctx, app} = this;
        const {rss, guid} = ctx.request.body;
        if (!rss || !guid) {
            this.error("params error");
            return
        }
        await dbRun("update article set readed=1 where rss=? and guid=?", [rss, guid]);
        this.success("OK");
    }

    async add({}) {
        const {ctx, app} = this;
        const {rss} = ctx.request.body;
        if (!rss) {
            this.error("params error");
            return
        }
        const row = await dbGet(SqlString.format(`select * from rss where url=? limit 1`, [rss]));
        if (!row) {
            await dbRun(`insert into rss (url) values ('${rss}')`);
        }
        this.success("OK");
    }

    async remove({}) {
        const {ctx, app} = this;
        const {rss} = ctx.request.body;
        if (!rss) {
            this.error("params error");
        }
        await dbRun(SqlString.format(`delete from rss where url=?`, [rss]));
        this.success("OK");
    }
}

module.exports = RssController;