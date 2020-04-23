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

From here, you will have access to any content the API has to offer, either as raw data using `.getContent("<CONTENT NAME>")`
or as object using the provided interfaces from the client (see [Interfaces](#Interfaces)).

For a list of all content available, see : https://xivapi.com/content

## [Interfaces](#Interfaces)

### Character

Using this interface, you will be able to retieve any informations about a character, or search someone using it's name.

```javascript
const character = new XIVAPI().character;

const me = character.search("John Doe");	//Use this to search accross every servers, see Wiki for more details about the SearchResult<CharacterSearch> Object.

const data = character.get(me.id);	//Use this to obtain more info about a character, see Wiki for more details about the Character Object.
```

`search()` let you specify an optional parameter's object, which allow you to restrict researchs to a specific server, or specify the first page for the results (ex: page 2 instead of page 1).