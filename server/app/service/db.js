const util = require("util");
const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./dbData/sqlite3.db");

const dbRun = util.promisify(db.run.bind(db));
const dbGet = util.promisify(db.get.bind(db));
const dbAll = util.promisify(db.all.bind(db));


//
// const runStatement=async (statement,params)=>{
//     let promise = await new Promise((resolve, reject) => {
//         var stmt = db.prepare(statement);
//         stmt.run();
//
//     })
//         .catch(err => {throw err});
//
//     return promise
// };


module.exports={
    dbGet,dbRun,dbAll
};


