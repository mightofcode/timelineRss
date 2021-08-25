const {dbGet, dbAll, dbRun} =require("../service/db");

 const setKv = async (k, v) => {
    if (
        (await dbGet(`select count(*) as count from kv where k='${k}'`)).count !== 0
    ) {
        await dbRun(`delete from kv where k='${k}'`);
    }
    await dbRun(`insert into kv (k,v) values ('${k}','${v}')`);
};

 const getKv = async (k) => {
    const row = await dbGet(`select * from kv where k='${k}'`);
    return row?.v || null;
};

 module.exports={getKv,setKv};
