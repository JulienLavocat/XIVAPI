import {XIVAPI} from "./index";
import * as dotenv from "dotenv";
dotenv.config();

const api = new XIVAPI(process.env.FFIV_API_KEY + "");
const CHARACTER_ID = 29720582;

start();

async function start() {

	try {



	} catch (error) {
		console.error(error);
	}

}