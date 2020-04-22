import { Characters } from "./services/character";
import { HTTPUtils } from "./services/http";

export class XIVAPI {

	character: Characters;

	private http: HTTPUtils;

	constructor(apiKey: string, serverUrl = "https://xivapi.com", language = "en") {
		//TODO: Args validation for server and language
		this.http = new HTTPUtils(apiKey, serverUrl, language);

		this.character = new Characters(this.http);
	}



}