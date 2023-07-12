"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const googleTrends = require('google-trends-api');
let queryResult;
/**
 *
 * @param geo : String
 * @param date : Date [the api only accpts data 15 days back so needs validation now]
 * @returns
 */
const getDailyTrends = function ({ geo = "US", date = new Date() } = {}) {
    googleTrends.dailyTrends({ geo: geo, trendDate: date }, function (err, result) {
        if (err)
            console.log(err);
        else
            queryResult = JSON.parse(result);
    });
    return queryResult;
};
exports.default = getDailyTrends;
//# sourceMappingURL=google.dailyTrends.js.map