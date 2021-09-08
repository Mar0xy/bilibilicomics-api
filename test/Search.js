const bilibilicomics = require('../index.js');

bilibilicomics.Search("Apoc").then(result => {
    console.log(result)
})