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
    const articles = await dbAll(`select article.*,rss.name from article left join rss where article.rss==rss.url and readed==0 order by pubTime desc limit 100`);
    this.success({articles});
  }

  async rssList({}) {
    const rss=await dbAll(`select * from rss order by id desc`);
    const rssUnread = await dbAll(`select rss.*,count(rss.url) as unread from rss left join article where rss.url=article.rss and article.readed=0 group by rss.url order by rss.id desc`);

    for (const item of rss){
      const found=rssUnread.find((v)=>{
        return v.url===item.url;
      });
      item.unread = found?.unread || 0;
    }
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

  async edit({}) {
    const {ctx, app} = this;
    const {rss, sample} = ctx.request.body;
    if (!rss || !sample) {
      this.error("params error");
      return;
    }
    let sampleNum=parseFloat(sample);
    if(!sampleNum||sampleNum<=0||sampleNum>1.0){
      this.error("params error");
      return;
    }
    await dbRun("update rss set sample=? where url=?", [sample,rss]);
    //
    await dbRun('delete from article where rss=?',[ rss ]);
    this.success("OK");
  }

  async add({}) {
    const {ctx, app} = this;
    const {rss} = ctx.request.body;
    if (!rss) {
      this.error("params error");
      return
    }
    let feed = null;
    try {
      feed = await parser.parseURL(rss);
      console.log(feed);
    } catch (e) {
      console.warn(e);
    }
    if (!feed) {
      this.error("rss invalid");
      return;
    }
    const name = feed.title;
    const icon = url.parse(feed.link).protocol + "//" + url.parse(feed.link).host + "/favicon.ico";

    const row = await dbGet(`select * from rss where url=? limit 1`, [rss]);
    if (!row) {
      await dbRun(`insert into rss (url,name,icon) values (?,?,?)`, [rss, name, icon]);
    }
    this.success("OK");
  }

  async remove({}) {
    const {ctx, app} = this;
    const {rss} = ctx.request.body;
    console.log(rss);
    if (!rss) {
      this.error("params error");
      return;
    }
    await dbRun('delete from rss where url=?', [ rss ]);
    await dbRun('delete from article where rss=?',[ rss ]);
    this.success("OK");
  }
}

module.exports = RssController;