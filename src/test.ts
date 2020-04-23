import {XIVAPI} from ".";
import * as dotenv from "dotenv";
dotenv.config();

const api = new XIVAPI(process.env.FFIV_API_KEY + "");
const CHARACTER_ID = 29720582;

start();

async function start() {

	try {

		const character = await api.character.get(CHARACTER_ID);
		console.log(character);

	} catch (error) {
		console.error(error);
	}

}