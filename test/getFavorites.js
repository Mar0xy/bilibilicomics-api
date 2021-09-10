const bilibilicomicsapi = require('../index.js');
// First string is the Authorization headers token without Bearer, Second string is location us for EU/US users and sg for Asia/Singapore users, Third string is refreshtoken which can be found under Request Cookies on posts as accesstoken
const bilibilicomics = new bilibilicomicsapi('', '', '');

bilibilicomics.getFavorites().then(res => {
    console.log(res);
})
