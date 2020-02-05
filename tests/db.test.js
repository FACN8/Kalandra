const tape = require("tape");
const runDbBuild = require("../db/db_build.js");
const getData = require("../src/queries/getdata.js");
const setData = require("../src/queries/setdata.js");

const initialdb = '[{"id":1,"title":"Salesforce bullshit day","pic":"https://upload.wikimedia.org/wikipedia/en/thumb/8/83/Salesforce_logo.svg/1200px-Salesforce_logo.svg.png","date":"2020-02-01T22:00:00.000Z","descr":"A Hijje to go home early"},{"id":2,"title":"Oracle day","pic":"https://ir0.mobify.com/project-oss-www-fujitsu-com/c8/webp80/1536/https://www.fujitsu.com/il/Images/oracle-db580x224_tcm152-40873.jpg","date":"2020-01-27T22:00:00.000Z","descr":"A trip to petah tikva"},{"id":3,"title":"Valentines day","pic":"https://www.myjewishlearning.com/wp-content/uploads/2003/02/love2-1598x900.jpg","date":"2020-02-13T22:00:00.000Z","descr":"A Hijje to consume love"},{"id":4,"title":"Fatmeeh Birthday","pic":"https://cdn.mos.cms.futurecdn.net/vChK6pTy3vN3KbYZ7UU7k3-1200-80.jpg","date":"2020-03-23T22:00:00.000Z","descr":"The only real celebration"}]'

tape('Testing browsing all data in intial database:', (t) => {
    runDbBuild((err, res) => {
        getData.getEvents((err, res) => {
            if (err) t.error(err);
            t.equal(JSON.stringify(res), initialdb, "Initial database values are correct");
            t.end();
        })
    })
})