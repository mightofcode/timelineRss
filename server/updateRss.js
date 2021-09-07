const {dbGet, dbAll, dbRun} = require("./app/service/db");

let Parser = require('rss-parser');
let parser = new Parser();

const sleep = async (time) => {
    return new Promise((resolve) => {
        setTimeout(resolve, time);
    });
}
const crypto = require('crypto');
const simpleHash=(s)=>{

    const sMd5=crypto.createHash('md5').update(s).digest('hex').toString();
    var hash = 0;
    if (sMd5.length == 0) {
        return hash;
    }
    for (var i = 0; i < sMd5.length; i++) {
        var char = sMd5.charCodeAt(i);
        hash = ((hash<<5)-hash)+char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
};

const handleArticle = async (rss, sampleInput,article) => {

    if(!article.guid){
        article.guid = article.link || article.title;
    }

    const sample=sampleInput||1.0;
    const hash = simpleHash(article.guid);
    const hashCliped=(Math.abs( hash)%123456)/123456;
    if (hashCliped > sample) {
        console.log(`drop article ${article?.link}`);
        return;
    }
    const row = await dbGet("select count(*) as" +
        " count from article where rss=? and guid=?", [rss, article.guid]);
    if (row.count === 0) {
        const date = new Date(article.pubDate);
        const time = date.getTime();
        console.log(`add article ${rss} ${article.title}`);
        await dbRun("insert into article (rss,guid,pubDate,pubTime,author,content,link,readed,title) values (?,?,?,?,?,?,?,0,?)",
            [rss, article.guid, article.pubDate, time, article.author, article.content, article.link, article.title]);
    }
};

const updateRss = async () => {
    const rssList = await dbAll(`select * from rss`);
    //console.log(rssList);
    for (const k in rssList) {
        const v = rssList[k];
        console.log(v);

        try {
            const feed = await parser.parseURL(v.url);
            const items = feed?.items || [];
            for (const item of items) {
                await handleArticle(v.url,v?.sample, item);
            }
        } catch (e) {
            console.log(e);
        }
        await sleep(1000);
    }
    console.log("end");
};

const main = async () => {
    while (true) {
        await updateRss();
        await sleep(3000);
    }
};

main();

console.log("1");


