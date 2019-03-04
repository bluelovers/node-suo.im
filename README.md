# suo.im README

    create suo.im short url / 生成 suo.im 短網址

## install

```
npm install suo.im
```

## demo

[demo.ts](test/demo.ts)

```ts
import { createShortURL } from 'suo.im';

createShortURL('https://www.npmjs.com/search?q=suo.im')
	.then(function (ret)
	{
		console.log(ret);

		return ret
	})
;
```
