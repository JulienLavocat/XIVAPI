import {XIVAPI} from "./index";
import * as dotenv from "dotenv";
dotenv.config();

const api = new XIVAPI(process.env.FFIV_API_KEY + "");
const CHARACTER_ID = 29720582;

start();

async function start() {

	try {

		const addon = api.getContent("Addon");

		const results = await addon.list(1);

		console.log(results);

		console.log(await results.next());

		console.log(await results.goTo(10));

		console.log(await results.previous());

	} catch (error) {
		console.error(error);
	}

}