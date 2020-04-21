import {Character} from "./structures/character";

const api = require("./api");

const CHARACTER_ID = 29720582;

start();

async function start() {

	try {
		const res = await api.character.get(CHARACTER_ID).then((r: any) => r.Character);

		console.log(new Character(res));

	} catch (error) {
		console.error(error);
	}

}