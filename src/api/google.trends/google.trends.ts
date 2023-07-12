import express from 'express';
import getDailyTrendsTransform from '../google.transformers/google.dailyTrends'
import DailyTrends, {Search,TrendingSearches} from "../../interfaces/google/dailyTrends";
import OmniDailyTrends, {OmniTrends} from "../../interfaces/omnibuzz/dailyTrends";

const googleTrends = require('google-trends-api');

let queryResult:OmniDailyTrends;

const router = express.Router();

router.get('/', (req, res) => {
    let geo:string = req.query.geo as string;
    let date:Date = req.query.date as unknown as Date;
    
    queryResult = getDailyTrendsTransform(geo,date);
    res.json(queryResult);
  })
  
  
export default router;

