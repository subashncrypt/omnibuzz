import { object } from "zod";
import DailyTrends, {Search,TrendingSearches} from "../../interfaces/google/dailyTrends";
import OmniDailyTrends, {OmniTrends} from "../../interfaces/omnibuzz/dailyTrends";



const googleTrends = require('google-trends-api');

let queryResult:DailyTrends = {default:{}} as DailyTrends;
let returnResult:OmniDailyTrends = {country:"",date:new Date(),trends:[]};



/**
 * 
 * @param geo : String
 * @param date : Date [the api only accepts date 15 days prior to the current date so needs validation now]
 * @returns 
 */
const getDailyTrends = function(geo:string = "US",date:Date= new Date):void{

  console.log(`geo ${geo} date ${date}`);
    googleTrends.dailyTrends({geo: geo,trendDate:date},function(err:any,result:any){
        if(err) console.log(err);
      else queryResult=JSON.parse(result);
    });
}

const getDailyTrendsTransform = function(geo:string = "US",date:Date= new Date):OmniDailyTrends{

  // get data from google trends api and store it in queryResult
  getDailyTrends(geo,date);

  // transform the data into a more usable format
  returnResult.country =  geo;
  returnResult.date = date;

  for(let x of queryResult.default.trendingSearchesDays[0].trendingSearches){

    let latestTrend : OmniTrends = {title:"",traffic:"",url:""};
    latestTrend.title = x.title.query as string;
    latestTrend.traffic = x.formattedTraffic as string;
    latestTrend.url = x.shareUrl as string;
    returnResult.trends.push(latestTrend);

  }

  return returnResult;

}


export default getDailyTrendsTransform;

