'use strict';

const {dbGet, dbAll, dbRun} = require("../service/db");

const Controller = require('egg').Controller;
const md5 = require('md5');
const dayjs = require('dayjs');
const BaseController = require('./base');
const SqlString = require('sqlstring');
let Parser = require('rss-parser');
let parser = new Parser();
const url = require('url'); // built-in utility

class RssController extends BaseController {
    async timeline({}) {
        const articles = await dbAll(`select * from article where readed==0 order by pubTime desc limit 100`);
        this.success({articles});
    }

    async rssList({}) {
        const rss = await dbAll(`select * from rss order by id asc`);
        this.success({rss});
    }

    async read({}) {
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
        let feed=null;
        try {
            feed = await parser.parseURL(rss);
            console.log(feed);
        }catch (e) {
            console.warn(e);
        }
        if(!feed){
            this.error("rss invalid");
            return
        }
        const name=feed.title;
        const icon=url.parse(feed.link).protocol+"//"+url.parse(feed.link).host+"/favicon.ico";

        const row = await dbGet(`select * from rss where url=? limit 1`, [rss]);
        if (!row) {
            await dbRun(`insert into rss (url,name,icon) values (?,?,?)`, [rss, name, icon]);
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