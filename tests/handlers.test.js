const test = require('tape');
const supertest = require('supertest');
const router =require('../src/router');

test('Home route should work', t=>{
    supertest(router)
    .get('/')
    .expect(200)
    .expect('Content-Type', /html/)
    .end ((err,res)=>{
            t.error(err)
            t.equal(res.type,'text/html','Response should return the index.html type');
            t.end();
    })
})


// test('Public route should work for css files', t=>{
//     supertest(router)
//     .get('/public/sellPage/sellStyle.css')
//     .expect(200)
//     .expect('Content-Type', 'text/css')
//     .end ((err,res)=>{
//             t.error(err)
//             t.equal(res.type,'text/css','Response should return the sell.css type');
//             t.end();
//     })
// })
// test('Public route should work for javascript files', t=>{
//     supertest(router)
//     .get('/public/shopPage/shopScript.js')
//     .expect(200)
//     .expect('Content-Type', /javascript/)
//     .end ((err,res)=>{
//             t.error(err)
//             t.equal(res.type,'application/javascript','Response should return the shop.js type');
//             t.end();
//     })
// })
// test('Public route should work for Images', t=>{
//     supertest(router)
//     .get('/public/res/logoPic.png')
//     .expect(200)
//     .expect('Content-Type', /image/)
//     .end ((err,res)=>{
//             t.error(err)
//             t.equal(res.type,'image/png','Response should return the logoPic.png type');
//             t.end();
//     })
// })
// let expected={
//     item_id:1,
//     item_name:'car',
//     item_price:'19.99',
//     price_currency:'$'
// }
// test('Type route should return the first row in shop tabe inside the database', t=>{
//     supertest(router)
//     .get('/buy_shop')
//     .expect(200)
//     .end ((err,res)=>{
//             t.error(err)
//             t.deepEqual(JSON.parse(res.text)[0],expected);
//             t.end();
//     })
//})