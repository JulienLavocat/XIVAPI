import {XIVAPI} from "./ff14";
import * as dotenv from "dotenv";
dotenv.config();

const api = new XIVAPI(process.env.FFIV_API_KEY + "");
const CHARACTER_ID = 29720582;

start();

async function start() {

	try {

		//const character = await api.character.get(CHARACTER_ID);
		//console.log(character);
		//console.log(await api.character.search("Piigo", {server: "Odin"}));

		const addons = api.getContent("Addon");

		console.log(await addons.list(10));

	} catch (error) {
		console.error(error);
	}

}