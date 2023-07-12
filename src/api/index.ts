import express from 'express';

import MessageResponse from '../interfaces/MessageResponse';
import emojis from './emojis';
import googleTrends from './google.trends/google.trends';



const router = express.Router();

router.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.use('/emojis', emojis);
router.use('/trends',googleTrends);

export default router;
