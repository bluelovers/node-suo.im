/**
 * Created by user on 2019/3/4.
 */
declare function suoim(url: URL | string): Promise<string>;
declare namespace suoim {
    const api_site = "http://suo.im/api.php";
    interface IOptions {
        /**
         * 要缩短的网址
         */
        url: string | URL;
        format?: EnumFormat;
        jsonpCallbackName?: string;
    }
    /**
     * create suo.im short url / 生成 suo.im 短網址
     */
    function createShortURL(url: URL | string): Promise<string>;
    interface IReturnJSON {
        url: string;
        err: string;
    }
    enum EnumFormat {
        /**
         * TXT格式短网址API接口
         */
        RAW = "",
        /**
         * JSON格式短网址API接口
         */
        JSON = "json",
        /**
         * JSONP格式短网址API接口
         */
        JSONP = "jsonp"
    }
    function _createApiCall(options: IOptions): URL;
    function _fetchApi(url: URL | string): Promise<Response>;
}
export = suoim;
