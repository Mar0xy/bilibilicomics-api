# BiliBiliComics NodeJS API

The BiliBiliComics NodeJS API is meant to ease the use of getting information from bilibilicomics.com.
Every Function is able to be used as an async function.

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
const bilibilicomics = require("bilibilicomics-api");
```

## Examples
View the test folder for examples

## Functions

##### bilibilicomics.getDetails(int/number)
Returns most details about the comic: cover, title, desc, chapters (all chapters in an array, NOTE: Chapters get sorted from latest to oldest), total (total chapters)

##### bilibilicomics.Search(string)
Returns all results with the provided string the results return in an array with following data: id, title, authors, vcover, hcover, genres

##### bilibilicomics.fetchImages(int/number)
Returns every image path for the chapter in an array for getTokens.

##### bilibilicomics.getTokens(response from fetchImages)
Returns every image from fetchImages as completed URLS with Access Tokens attached to them in an array.