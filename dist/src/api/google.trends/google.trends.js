"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const googleTrends = require('google-trends-api');
const google_dailyTrends_1 = __importDefault(require("../google.transformers/google.dailyTrends"));
let queryResult;
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get('/', (req, res) => {
    queryResult = (0, google_dailyTrends_1.default)();
    res.json(queryResult.default.trendingSearchesDays);
});
exports.default = router;
//# sourceMappingURL=google.trends.js.map