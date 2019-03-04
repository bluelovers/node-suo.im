"use strict";
/**
 * Created by user on 2019/3/4.
 */
const cross_fetch_1 = require("cross-fetch");
function suoim(url) {
    return suoim.createShortURL(url);
}
(function (suoim) {
    suoim.api_site = 'http://suo.im/api.php';
    /**
     * create suo.im short url / 生成 suo.im 短網址
     */
    function createShortURL(url) {
        let u = _createApiCall({
            url: 'https://www.npmjs.com/search?q=suo.im',
            format: suoim.EnumFormat.JSON,
        });
        return _fetchApi(u)
            .then(async function (res) {
            if (res.status >= 400) {
                throw new Error("Bad response from server");
            }
            let json = await res.json();
            if (json.err) {
                return Promise.reject(json.err);
            }
            else {
                return Promise.resolve(json.url);
            }
        });
    }
    suoim.createShortURL = createShortURL;
    let EnumFormat;
    (function (EnumFormat) {
        /**
         * TXT格式短网址API接口
         */
        EnumFormat["RAW"] = "";
        /**
         * JSON格式短网址API接口
         */
        EnumFormat["JSON"] = "json";
        /**
         * JSONP格式短网址API接口
         */
        EnumFormat["JSONP"] = "jsonp";
    })(EnumFormat = suoim.EnumFormat || (suoim.EnumFormat = {}));
    function _createApiCall(options) {
        let u = new URL(suoim.api_site);
        switch (options.format) {
            case EnumFormat.JSON:
            case EnumFormat.JSONP:
                u.searchParams.append('format', options.format);
                if (options.format === EnumFormat.JSONP) {
                    u.searchParams.append('callback', options.jsonpCallbackName);
                }
                break;
        }
        if (typeof options.url == 'string') {
            u.searchParams.append('url', options.url);
        }
        else {
            u.searchParams.append('url', options.url.href);
        }
        return u;
    }
    suoim._createApiCall = _createApiCall;
    function _fetchApi(url) {
        return cross_fetch_1.default(typeof url === 'string' ? url : url.href);
    }
    suoim._fetchApi = _fetchApi;
})(suoim || (suoim = {}));
module.exports = suoim;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7O0dBRUc7QUFFSCw2Q0FBZ0M7QUFFaEMsU0FBUyxLQUFLLENBQUMsR0FBaUI7SUFFL0IsT0FBTyxLQUFLLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2xDLENBQUM7QUFFRCxXQUFVLEtBQUs7SUFFRCxjQUFRLEdBQUcsdUJBQXVCLENBQUM7SUFZaEQ7O09BRUc7SUFDSCxTQUFnQixjQUFjLENBQUMsR0FBaUI7UUFFL0MsSUFBSSxDQUFDLEdBQUcsY0FBYyxDQUFDO1lBQ3RCLEdBQUcsRUFBRSx1Q0FBdUM7WUFDNUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSTtTQUM3QixDQUFDLENBQUM7UUFFSCxPQUFPLFNBQVMsQ0FBQyxDQUFDLENBQUM7YUFDakIsSUFBSSxDQUFDLEtBQUssV0FBVyxHQUFHO1lBRXhCLElBQUksR0FBRyxDQUFDLE1BQU0sSUFBSSxHQUFHLEVBQUU7Z0JBQ3RCLE1BQU0sSUFBSSxLQUFLLENBQUMsMEJBQTBCLENBQUMsQ0FBQzthQUM1QztZQUVELElBQUksSUFBSSxHQUFHLE1BQU0sR0FBRyxDQUFDLElBQUksRUFBaUIsQ0FBQztZQUUzQyxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQ1o7Z0JBQ0MsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTthQUMvQjtpQkFFRDtnQkFDQyxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO2FBQ2hDO1FBQ0YsQ0FBQyxDQUFDLENBQ0Y7SUFDRixDQUFDO0lBMUJlLG9CQUFjLGlCQTBCN0IsQ0FBQTtJQVFELElBQVksVUFjWDtJQWRELFdBQVksVUFBVTtRQUVyQjs7V0FFRztRQUNILHNCQUFRLENBQUE7UUFDUjs7V0FFRztRQUNILDJCQUFhLENBQUE7UUFDYjs7V0FFRztRQUNILDZCQUFlLENBQUE7SUFDaEIsQ0FBQyxFQWRXLFVBQVUsR0FBVixnQkFBVSxLQUFWLGdCQUFVLFFBY3JCO0lBRUQsU0FBZ0IsY0FBYyxDQUFDLE9BQWlCO1FBRS9DLElBQUksQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLE1BQUEsUUFBUSxDQUFDLENBQUM7UUFFMUIsUUFBUSxPQUFPLENBQUMsTUFBTSxFQUN0QjtZQUNDLEtBQUssVUFBVSxDQUFDLElBQUksQ0FBQztZQUNyQixLQUFLLFVBQVUsQ0FBQyxLQUFLO2dCQUNwQixDQUFDLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUVoRCxJQUFJLE9BQU8sQ0FBQyxNQUFNLEtBQUssVUFBVSxDQUFDLEtBQUssRUFDdkM7b0JBQ0MsQ0FBQyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2lCQUM3RDtnQkFDRCxNQUFNO1NBQ1A7UUFFRCxJQUFJLE9BQU8sT0FBTyxDQUFDLEdBQUcsSUFBSSxRQUFRLEVBQ2xDO1lBQ0MsQ0FBQyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUMxQzthQUVEO1lBQ0MsQ0FBQyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDL0M7UUFFRCxPQUFPLENBQUMsQ0FBQTtJQUNULENBQUM7SUEzQmUsb0JBQWMsaUJBMkI3QixDQUFBO0lBRUQsU0FBZ0IsU0FBUyxDQUFDLEdBQWlCO1FBRTFDLE9BQU8scUJBQUssQ0FBQyxPQUFPLEdBQUcsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ3ZELENBQUM7SUFIZSxlQUFTLFlBR3hCLENBQUE7QUFFRixDQUFDLEVBckdTLEtBQUssS0FBTCxLQUFLLFFBcUdkO0FBRUQsaUJBQVMsS0FBSyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHVzZXIgb24gMjAxOS8zLzQuXG4gKi9cblxuaW1wb3J0IGZldGNoIGZyb20gJ2Nyb3NzLWZldGNoJztcblxuZnVuY3Rpb24gc3VvaW0odXJsOiBVUkwgfCBzdHJpbmcpXG57XG5cdHJldHVybiBzdW9pbS5jcmVhdGVTaG9ydFVSTCh1cmwpO1xufVxuXG5uYW1lc3BhY2Ugc3VvaW0ge1xuXG5cdGV4cG9ydCBjb25zdCBhcGlfc2l0ZSA9ICdodHRwOi8vc3VvLmltL2FwaS5waHAnO1xuXG5cdGV4cG9ydCBpbnRlcmZhY2UgSU9wdGlvbnNcblx0e1xuXHRcdC8qKlxuXHRcdCAqIOimgee8qeefreeahOe9keWdgFxuXHRcdCAqL1xuXHRcdHVybDogc3RyaW5nIHwgVVJMLFxuXHRcdGZvcm1hdD86IEVudW1Gb3JtYXQsXG5cdFx0anNvbnBDYWxsYmFja05hbWU/OiBzdHJpbmcsXG5cdH1cblxuXHQvKipcblx0ICogY3JlYXRlIHN1by5pbSBzaG9ydCB1cmwgLyDnlJ/miJAgc3VvLmltIOefree2suWdgFxuXHQgKi9cblx0ZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNob3J0VVJMKHVybDogVVJMIHwgc3RyaW5nKVxuXHR7XG5cdFx0bGV0IHUgPSBfY3JlYXRlQXBpQ2FsbCh7XG5cdFx0XHR1cmw6ICdodHRwczovL3d3dy5ucG1qcy5jb20vc2VhcmNoP3E9c3VvLmltJyxcblx0XHRcdGZvcm1hdDogc3VvaW0uRW51bUZvcm1hdC5KU09OLFxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIF9mZXRjaEFwaSh1KVxuXHRcdFx0LnRoZW4oYXN5bmMgZnVuY3Rpb24gKHJlcylcblx0XHRcdHtcblx0XHRcdFx0aWYgKHJlcy5zdGF0dXMgPj0gNDAwKSB7XG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiQmFkIHJlc3BvbnNlIGZyb20gc2VydmVyXCIpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0bGV0IGpzb24gPSBhd2FpdCByZXMuanNvbigpIGFzIElSZXR1cm5KU09OO1xuXG5cdFx0XHRcdGlmIChqc29uLmVycilcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChqc29uLmVycilcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGpzb24udXJsKVxuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdDtcblx0fVxuXG5cdGV4cG9ydCBpbnRlcmZhY2UgSVJldHVybkpTT05cblx0e1xuXHRcdHVybDogc3RyaW5nLFxuXHRcdGVycjogc3RyaW5nLFxuXHR9XG5cblx0ZXhwb3J0IGVudW0gRW51bUZvcm1hdFxuXHR7XG5cdFx0LyoqXG5cdFx0ICogVFhU5qC85byP55+t572R5Z2AQVBJ5o6l5Y+jXG5cdFx0ICovXG5cdFx0UkFXID0gJycsXG5cdFx0LyoqXG5cdFx0ICogSlNPTuagvOW8j+efree9keWdgEFQSeaOpeWPo1xuXHRcdCAqL1xuXHRcdEpTT04gPSAnanNvbicsXG5cdFx0LyoqXG5cdFx0ICogSlNPTlDmoLzlvI/nn63nvZHlnYBBUEnmjqXlj6Ncblx0XHQgKi9cblx0XHRKU09OUCA9ICdqc29ucCcsXG5cdH1cblxuXHRleHBvcnQgZnVuY3Rpb24gX2NyZWF0ZUFwaUNhbGwob3B0aW9uczogSU9wdGlvbnMpXG5cdHtcblx0XHRsZXQgdSA9IG5ldyBVUkwoYXBpX3NpdGUpO1xuXG5cdFx0c3dpdGNoIChvcHRpb25zLmZvcm1hdClcblx0XHR7XG5cdFx0XHRjYXNlIEVudW1Gb3JtYXQuSlNPTjpcblx0XHRcdGNhc2UgRW51bUZvcm1hdC5KU09OUDpcblx0XHRcdFx0dS5zZWFyY2hQYXJhbXMuYXBwZW5kKCdmb3JtYXQnLCBvcHRpb25zLmZvcm1hdCk7XG5cblx0XHRcdFx0aWYgKG9wdGlvbnMuZm9ybWF0ID09PSBFbnVtRm9ybWF0LkpTT05QKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dS5zZWFyY2hQYXJhbXMuYXBwZW5kKCdjYWxsYmFjaycsIG9wdGlvbnMuanNvbnBDYWxsYmFja05hbWUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHRcdGlmICh0eXBlb2Ygb3B0aW9ucy51cmwgPT0gJ3N0cmluZycpXG5cdFx0e1xuXHRcdFx0dS5zZWFyY2hQYXJhbXMuYXBwZW5kKCd1cmwnLCBvcHRpb25zLnVybCk7XG5cdFx0fVxuXHRcdGVsc2Vcblx0XHR7XG5cdFx0XHR1LnNlYXJjaFBhcmFtcy5hcHBlbmQoJ3VybCcsIG9wdGlvbnMudXJsLmhyZWYpO1xuXHRcdH1cblxuXHRcdHJldHVybiB1XG5cdH1cblxuXHRleHBvcnQgZnVuY3Rpb24gX2ZldGNoQXBpKHVybDogVVJMIHwgc3RyaW5nKVxuXHR7XG5cdFx0cmV0dXJuIGZldGNoKHR5cGVvZiB1cmwgPT09ICdzdHJpbmcnID8gdXJsIDogdXJsLmhyZWYpXG5cdH1cblxufVxuXG5leHBvcnQgPSBzdW9pbTtcbiJdfQ==