/**
 * Created by user on 2019/3/4.
 */

import fetch from 'cross-fetch';

function suoim(url: URL | string)
{
	return suoim.createShortURL(url);
}

namespace suoim {

	export const api_site = 'http://suo.im/api.php';

	export interface IOptions
	{
		/**
		 * 要缩短的网址
		 */
		url: string | URL,
		format?: EnumFormat,
		jsonpCallbackName?: string,
	}

	/**
	 * create suo.im short url / 生成 suo.im 短網址
	 */
	export function createShortURL(url: URL | string)
	{
		let u = _createApiCall({
			url: 'https://www.npmjs.com/search?q=suo.im',
			format: suoim.EnumFormat.JSON,
		});

		return _fetchApi(u)
			.then(async function (res)
			{
				if (res.status >= 400) {
					throw new Error("Bad response from server");
				}

				let json = await res.json() as IReturnJSON;

				if (json.err)
				{
					return Promise.reject(json.err)
				}
				else
				{
					return Promise.resolve(json.url)
				}
			})
		;
	}

	export interface IReturnJSON
	{
		url: string,
		err: string,
	}

	export enum EnumFormat
	{
		/**
		 * TXT格式短网址API接口
		 */
		RAW = '',
		/**
		 * JSON格式短网址API接口
		 */
		JSON = 'json',
		/**
		 * JSONP格式短网址API接口
		 */
		JSONP = 'jsonp',
	}

	export function _createApiCall(options: IOptions)
	{
		let u = new URL(api_site);

		switch (options.format)
		{
			case EnumFormat.JSON:
			case EnumFormat.JSONP:
				u.searchParams.append('format', options.format);

				if (options.format === EnumFormat.JSONP)
				{
					u.searchParams.append('callback', options.jsonpCallbackName);
				}
				break;
		}

		if (typeof options.url == 'string')
		{
			u.searchParams.append('url', options.url);
		}
		else
		{
			u.searchParams.append('url', options.url.href);
		}

		return u
	}

	export function _fetchApi(url: URL | string)
	{
		return fetch(typeof url === 'string' ? url : url.href)
	}

}

export = suoim;
