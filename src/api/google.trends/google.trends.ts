const googleTrends = require('google-trends-api');
import getDailyTrends from '../google.transformers/google.dailyTrends'
import DailyTrends, {Search,TrendingSearches} from "../../interfaces/google/dailyTrends";

let queryResult:DailyTrends;

import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    queryResult = getDailyTrends();
    res.json(queryResult.default.trendingSearchesDays[0].trendingSearches[0]);
  });

  
export default router;

