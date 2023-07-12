import DailyTrends, {Search,TrendingSearches} from "../../interfaces/google/dailyTrends";

const googleTrends = require('google-trends-api');

let queryResult:DailyTrends;

/**
 * 
 * @param geo : String
 * @param date : Date [the api only accpts data 15 days back so needs validation now]
 * @returns 
 */
const getDailyTrends = function({geo="US",date = new Date()}:{geo?:string,date?:Date}={}):DailyTrends{
    googleTrends.dailyTrends({geo: geo,trendDate:date},function(err:any,result:any){
        if(err) console.log(err);
      else queryResult=JSON.parse(result);
    });

    return queryResult;

}


export default getDailyTrends;
