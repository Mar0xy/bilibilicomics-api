const bilibilicomics = require('../index.js');

bilibilicomics.fetchImages(14650).then(result => {
    bilibilicomics.getTokens(result).then(imgs => console.log(imgs));
})