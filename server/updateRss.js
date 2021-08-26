const {dbGet, dbAll, dbRun} = require("./app/service/db");

let Parser = require('rss-parser');
let parser = new Parser();

const sleep = async (time) => {
    return new Promise((resolve) => {
        setTimeout(resolve, time);
    });
}

const handleArticle = async (rss, article) => {
    const row = await dbGet("select count(*) as count from article where rss=? and guid=?", [rss, article.guid]);
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
                await handleArticle(v.url, item);
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
    }
};

main();

console.log("1");


