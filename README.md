# BiliBiliComics NodeJS API

The BiliBiliComics NodeJS API is meant to ease the use of getting information from bilibilicomics.com \
Every Function is an asynchronous function.

## Features

- Search for Comics
- Get Comics Information and Chapters/Episodes
- Resolve the Image Strings for Chapters/Episodes
- Get a Complete Image URI (Generates Token) array which allows you to access them.

## Installation

Install the module via npm.
```sh
npm install bilibilicomics-api
```

Require the module
```js
const bilibilicomics-api = require("bilibilicomics-api");
```

Create Constructor you can provide three strings: First one is the Authorization Token without Bearer, Second is location either us for EU/US or sg for Asia/Singapore \
\
Third is refreshtoken which can be accessed via viewing any post requests cookies with the sg-user/us-user.bilibilicomics.com domain via Dev Tools on browser it's labelled as accesstoken in the Cookie \
\
These strings are all required if you end up using account based functions like getFavorites
```js
const bilibilicomics = new bilibilicomics-api();
```

## Examples
View the [test folder](https://github.com/Mar0xy/bilibilicomics-api/tree/main/test) for examples

## Functions

##### bilibilicomics.getDetails(int/number)
Returns most details about the comic: cover, title, url, desc, chapters (all chapters in an array, NOTE: Chapters get sorted from latest to oldest), total (total chapters)

##### bilibilicomics.Search(string)
Returns all results with the provided string the results return in an array with following data: id, title, url, authors, vcover, hcover, genres

##### bilibilicomics.fetchImages(int/number)
Returns every image path for the chapter in an array for getTokens.

##### bilibilicomics.getTokens(response from fetchImages)
Returns every image from fetchImages as completed URLS with Access Tokens attached to them in an array.

##### bilibilicomics.getFeatured()
Returns 6 random comics like on the homepage: id, title, url, vcover, hcover, authors, genres

##### bilibilicomics.getComicsByID(array)
Returns multiple comics as an array by the provided array filled with comic ids: id, title, url, vcover, hcover

##### bilibilicomics.getFavorites()
Returns every favorite comic from your account (NOTE: This is still very experimental and not yet officially released)