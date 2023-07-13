import express from 'express';
import MessageResponse from '../interfaces/MessageResponse';
import googleTrends from './google.trends/google.trends';



const router = express.Router();

router.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.use('/gtrends',googleTrends);

export default router;
