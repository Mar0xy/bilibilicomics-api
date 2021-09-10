const bilibilicomicsapi = require('../index.js');

const bilibilicomics = new bilibilicomicsapi();

// Searches for the keyword Apoc, Picks the first result, gets the comic data, grabs all images for the first chapter, then returns the first image with a token to use.
bilibilicomics.Search("Apoc").then(result => {
    bilibilicomics.getDetails(result[0].id).then(comic => {
        console.log(comic.cover, '\n' + comic.title);
        bilibilicomics.fetchImages(comic.chapters[0].id).then(chapter => {
            bilibilicomics.getTokens(chapter).then(imgs => console.log(imgs[0]));
        })
    })
})