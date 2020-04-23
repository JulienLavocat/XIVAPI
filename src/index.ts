import {XIVAPI} from "./ff14";
import * as dotenv from "dotenv";
import * as fs from "fs";
dotenv.config();

const api = new XIVAPI(process.env.FFIV_API_KEY + "");
const CHARACTER_ID = 29720582;

start();

async function start() {

	try {

		const character = await api.character.get(CHARACTER_ID);
		fs.writeFileSync("./character.json", JSON.stringify(character, null, 4));
		//console.log(character);

	} catch (error) {
		console.error(error);
	}

}