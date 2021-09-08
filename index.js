const axios = require("axios");

class bilibilicomics {
    getDetails(id) {
        return new Promise((resolve, reject) => {
            axios.post('https://www.bilibilicomics.com/twirp/comic.v1.Comic/ComicDetail?device=android&platform=app', {'comic_id': id})
                .then(res => {
                    let title = res.data.data.title
                    let episodes = res.data.data.ep_list
                    let epcount = res.data.data.total
                    let cover = res.data.data.horizontal_cover
                    let desc = res.data.data.evaluate
                    let url = `https://www.bilibilicomics.com/detail/mc${res.data.data.id}`;
                    return resolve({cover: cover, title: title, url: url, desc: desc, chapters: episodes, total: epcount});
                })
                .catch(err => { return reject(`An error occured within the api: ${err}`) })
        })
    }
    fetchImages(id) {
        return new Promise((resolve, reject) => {
            axios.post('https://www.bilibilicomics.com/twirp/comic.v1.Comic/GetImageIndex?device=android&platform=app', {'ep_id': id})
                .then(res => {
                    let images = [];
                    res.data.data.images.forEach(img => {
                        images.push(img.path);
                    });
                    return resolve(images);
                })
                .catch(err => { return reject(`An error occured within the api: ${err}`) })
        })
    }
    getTokens(imgs) {
        return new Promise((resolve, reject) => {
            let img = "";
            imgs.forEach((val, key, arr) => {
                if (Object.is(arr.length - 1, key)) {
                    img += "\""+ val + "\""; 
                } else {
                    img += "\""+ val + "\", ";
                }
            });
            axios.post('https://www.bilibilicomics.com/twirp/comic.v1.Comic/ImageToken?device=android&platform=app', {"urls": `[${img}]`})
                .then(res => {
                    let imgurls = [];
                    res.data.data.forEach(info => {
                        imgurls.push(`${info.url}?token=${info.token}`);
                    });
                    return resolve(imgurls);
                })
                .catch(err => { return reject(`An error occured within the api: ${err}`) })
        })
    }
    Search(query) {
        return new Promise((resolve, reject) => {
            axios.post('https://www.bilibilicomics.com/twirp/comic.v1.Comic/Search?device=android&platform=app', {"style_id":-1,"area_id":-1,"is_finish":-1,"is_free":-1,"order":-1,"key_word":query,"page_num":1,"page_size":9,"need_shield_prefer":true,"style_prefer":"[{\"style_id\":3,\"prefer\":2},{\"style_id\":11,\"prefer\":1},{\"style_id\":12,\"prefer\":2},{\"style_id\":13,\"prefer\":2},{\"style_id\":14,\"prefer\":1},{\"style_id\":15,\"prefer\":2},{\"style_id\":16,\"prefer\":1},{\"style_id\":17,\"prefer\":2},{\"style_id\":19,\"prefer\":2},{\"style_id\":20,\"prefer\":2},{\"style_id\":21,\"prefer\":1},{\"style_id\":22,\"prefer\":2},{\"style_id\":23,\"prefer\":1},{\"style_id\":30,\"prefer\":2},{\"style_id\":41,\"prefer\":2}]"})
                .then(res => {
                    let results = [];
                    res.data.data.list.forEach(comic => {
                        results.push({
                            id: comic.id,
                            title: comic.title.replace(/(<([^>]+)>)/gi, ""),
                            url: `https://www.bilibilicomics.com/detail/mc${comic.id}`,
                            authors: comic.author_name,
                            vcover: comic.vertical_cover,
                            hcover: comic.horizontal_cover,
                            genres: comic.styles
                        })
                    })
                    return resolve(results);
                })
                .catch(err => { return reject(`An error occured within the api: ${err}`) })
        })
    }
}

module.exports = new bilibilicomics();