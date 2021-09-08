const bilibilicomics = require('../index.js');

bilibilicomics.getDetails(139).then(result => {
    console.log(result.cover, '\n' + result.title, '\n' + result.total, '\n' + result.desc)
})