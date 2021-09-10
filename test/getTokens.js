const bilibilicomicsapi = require('../index.js');

const bilibilicomics = new bilibilicomicsapi();

bilibilicomics.fetchImages(14650).then(result => {
    bilibilicomics.getTokens(result).then(imgs => console.log(imgs));
})