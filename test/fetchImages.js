const bilibilicomics = require('../index.js');

bilibilicomics.fetchImages(14650).then(result => {
    console.log(result)
})