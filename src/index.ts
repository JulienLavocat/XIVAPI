import { Characters } from "./services/character";
import { HTTPUtils } from "./services/http";
import { Content } from "./services/content";
import { transformers } from "./structures/content/transformers";

export class XIVAPI {

	character: Characters;

	private http: HTTPUtils;

	constructor(apiKey: string, language = "en", serverUrl = "https://xivapi.com") {
		// TODO: Args validation for server and language
		this.http = new HTTPUtils(apiKey, serverUrl, language);

		this.character = new Characters(this.http);
	}

	getContent(name: string) {
		const transformer = transformers[name];
		if(!transformer)
			return new Content<any>(this.http, name, null);
		return new Content<typeof transformer>(this.http, name, transformer)
	}

	async listServers(): Promise<string[]> {
		const res = (await this.http.get("/servers")) as string[];
		return res;
	}
	listServersPerDC(): Promise<any> {
		return this.http.get("/servers/dc");
	}

}