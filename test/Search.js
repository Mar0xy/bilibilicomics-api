const bilibilicomicsapi = require('../index.js');

const bilibilicomics = new bilibilicomicsapi();

bilibilicomics.Search("Apoc").then(result => {
    console.log(result)
})