import { createShortURL } from '../index';

createShortURL('https://www.npmjs.com/search?q=suo.im')
	.then(function (ret)
	{
		console.log(ret);

		return ret
	})
;
