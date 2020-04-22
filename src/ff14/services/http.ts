import * as Fetch from "node-fetch";
import { XIVAPIError } from "../apiError";

const fetch = Fetch.default;

export class HTTPUtils {

	private apiKey: string;
	private serverUrl: string;
	private language: string;

	constructor(apiKey: string, serverUrl: string, language: string) {
		this.serverUrl = serverUrl;
		this.apiKey = apiKey;
		this.language = language;
	}

	async get(path: string): Promise<any> {
		//console.log(this.getBaseUrl(path));
		const res = await fetch(this.getBaseUrl(path));

		//TODO: Check for network error

		const json = await res.json();

		if(json.Error)
			throw new XIVAPIError(json)

		return json;
	}

	private getBaseUrl(path: string) {

		if(path === "")
			path = "?";

		return `${this.serverUrl}${path}&apiKey=${this.apiKey}&language=${this.language}`;
	}

}