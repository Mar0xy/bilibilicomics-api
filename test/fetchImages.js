const bilibilicomicsapi = require('../index.js');

const bilibilicomics = new bilibilicomicsapi();

bilibilicomics.fetchImages(14650).then(result => {
    console.log(result)
})