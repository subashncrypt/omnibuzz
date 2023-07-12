"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const emojis_1 = __importDefault(require("./emojis"));
const google_trends_1 = __importDefault(require("./google.trends/google.trends"));
const router = express_1.default.Router();
router.get('/', (req, res) => {
    res.json({
        message: 'API - 👋🌎🌍🌏',
    });
});
router.use('/emojis', emojis_1.default);
router.use('/trends', google_trends_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map