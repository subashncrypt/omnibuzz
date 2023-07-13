import express from 'express';
import getDailyTrendsTransform from '../google.transformers/google.dailyTrends'
import DailyTrends, {Search,TrendingSearches,TopTrendingSearches} from "../../interfaces/google/dailyTrends";
import OmniDailyTrends, {OmniTrends} from "../../interfaces/omnibuzz/dailyTrends";

const googleTrends = require('google-trends-api');



const router = express.Router();

router.get('/',(req,res)=>{
    res.send("Welcome to the Google Trends API")
})

router.get('/dailyTrends', (req, res) => {

  let geo:string = ""
  let date:Date = new Date();
  let queryResult:OmniDailyTrends;

  try{
      geo = req.query.geo as string;
      date = req.query.date as unknown as Date;
  }catch{
    res.status(400).send("Invalid Query please send Date in the format YYYY-MM-DD and Geo in geo code format for ex 'US' : USA ");
  }

    queryResult = getDailyTrendsTransform(geo,date);
    res.json(queryResult);

  })

router.get('/realTimeTrends',(req,res)=>{

  googleTrends.realTimeTrends({
    geo: 'US',
    category: 'all',
}, function(err:any, results:any) {
    if (err) {
       console.log(err);
    } else {
      res.json(JSON.parse(results));
    } 
});

}
)
  
  
export default router;

