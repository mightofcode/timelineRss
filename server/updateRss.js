const {updateRss} =require ("./app/service/rssUpdate");
const {sleep} =require ("./app/utils/sleep");


const main = async () => {
    while (true) {
        await updateRss();
        await sleep(3000);
    }
};

main();

console.log("1");


