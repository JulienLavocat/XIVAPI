const XIVApi = require("xivapi-js");
const api = new XIVApi({
	private_key: process.env.FFIV_API_KEY,
	language: "fr"
});

module.exports = api;