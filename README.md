# XIVAPI

Object-oriented XIVAPI.com Client written in Typescript

## Install

`npm i @piigo/xivapi`

## Usage

Add XIVAPI and create a new client object using your api key:

```javascript
const XIVAPI = require("@piigo/xivapi");
const api = new XIVAPI("<API KEY GOES HERE>")
```

You can also pass language and server as optionnal parameters (default: `en` / `"https://xivapi.com"`).

From here, you will have access to any content the API has to offer, either as raw data using `.getContent()`
or as object using the provided interfaces from the client.