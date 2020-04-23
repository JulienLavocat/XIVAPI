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

const me = character.search("John Doe"); //Use this to search accross every servers, see Wiki for more details about the SearchResult<CharacterSearch> Object.

const data = character.get(me.id); //Use this to obtain more informations about a character, see Wiki for more details about the Character Object.
```

`search()` let you specify an optional parameter's object, which allow you to restrict researchs to a specific server, or specify the first page for the results (ex: page 2 instead of page 1).

### Content

Using this interface, you will be able to retieve any informations about every resources accessible from the API. Some resources have transformers, which will transform the raw API results into proper objects, but keep in mind that most of them don't have these transformer, feel free to contribute if you want to add one, or open an issue and I'll add it if I have time.

When listing all available resources for a specific content, you will obtain a `SearchResult<T>` object where T will either be of transformer's type or `any`. Be carefull when using content that has no transformer, as the API will return raw data, so properties will probably be in PascalCase instead of camelCase, etc ...
To make sure that the content you want has a transformer, you can use the `hasTransformer` property.

Alternatively, you can add your own transformer by creating a class that will use the data returned from the API and register it in the `transformers` object :

```javascript
import { transformers } from "xivapi/structures/content/transformers";

Object.assign(transformers, {"<API CONTENT NAME>": TransformerClass})
```

If you do so, please fill a pull request so that others can benefit from it.

```javascript

//With transformer

const addon = new XIVAPI().getContent("Addon");
const addonList = addon.list(); //Use this to list all the resources under this content category. See wiki for more details about SearchResult<T>.
const addonData = addon.get(addonList[0].id); //Use this to obtain more informations about a resource.

//Without transformer

const content = new XIVAPI().getContent("noTransformer");
const list = content.list();
const resource = content.get(list[0].ID);
```

`search()` let you restrict the research to a certain number of results per page using the `limit` argument (default to `100`), you can also restrict the results by providing an array of IDs.