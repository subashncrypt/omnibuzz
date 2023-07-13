import { object } from "zod";
import DailyTrends, {Search,TrendingSearches} from "../../interfaces/google/dailyTrends";
import OmniDailyTrends, {OmniTrends} from "../../interfaces/omnibuzz/dailyTrends";

const googleTrends = require('google-trends-api');
let gRes:DailyTrends;


/**
 * 
 * @param geo : String
 * @param date : Date [the api only accepts date 15 days prior to the current date so needs validation now]
 * @returns 
 */
const getDailyTrends = function(geo:string = "US",date:Date= new Date):DailyTrends{
  let queryResult:DailyTrends = {default:{}} as DailyTrends;
  
  // validate the date
  console.log(`geo ${geo} date ${date}`);

  googleTrends.dailyTrends({geo: geo,trendDate:date},function(err:any,result:any){
        if(err) console.log(err);
      else gRes=JSON.parse(result);
  });

  queryResult.default = gRes.default;
  return queryResult;
  
}

const getDailyTrendsTransform = function(geo:string = "US",date:Date= new Date):OmniDailyTrends{

  let returnResult:OmniDailyTrends = {country:"",date:new Date(),trends:[]};
  let tsdCurrent : TrendingSearches = {date:"",formattedDate:"",trendingSearches:[]};

  console.log("Before Getting anything");
  console.log(returnResult);   
  // get data from google trends api and store it in queryResult
  let queryResult : DailyTrends = getDailyTrends(geo,date);

  // transform the data into a more usable format
  returnResult.country =  geo;
  returnResult.date = date;

  console.log(queryResult.default.trendingSearchesDays);

  if(queryResult.default.trendingSearchesDays[0] !== undefined){
    tsdCurrent = queryResult.default.trendingSearchesDays[0];

    // Get the Previous day search data
    // let tsdPrevious : TrendingSearches= queryResult.default.trendingSearchesDays[1];
  }else{
    return returnResult;
  }

  for(let x of tsdCurrent.trendingSearches){

    let latestTrend : OmniTrends = {title:"",traffic:"",url:""};
    latestTrend.title = x.title.query as string;
    latestTrend.traffic = x.formattedTraffic as string;
    latestTrend.url = x.shareUrl as string;
    returnResult.trends.push(latestTrend);

  }
  
  return returnResult;

}


export default getDailyTrendsTransform;

